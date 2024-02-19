import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BG_URL } from "../Utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptSearch;
