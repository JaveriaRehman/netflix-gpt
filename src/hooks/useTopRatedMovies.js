import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../Utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
