import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const tailerVideo = useSelector((store) => store.movie?.tailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );

    const json = await data.json();

    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !tailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
