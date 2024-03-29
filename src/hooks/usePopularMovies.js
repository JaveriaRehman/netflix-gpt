import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../Utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovie = useSelector((store) => store.movie?.popularMovie);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, []);
};

export default usePopularMovies;
