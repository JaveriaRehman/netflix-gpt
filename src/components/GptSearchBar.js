import React, { useRef } from "react";
import lang from "../Utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTION } from "../Utils/constants";
import { addGptMoviesResult } from "../Utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const serachMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me 5 movies, comma seperated like the example result given ahed.Example Result: Gadar,Sholay,DON, Golmal, koi mil gya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) return;

    const gptMovies = gptResult.choices?.[0].message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => serachMovieTMDB(movie));

    const resultSet = await Promise.all(promiseArray);
    const tmdbResult = resultSet;
    console.log(gptMovies, "gpt");
    console.log(tmdbResult, "tmpd");

    dispatch(
      addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
