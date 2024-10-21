import React, { useEffect, useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVideo);

  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1184918/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailers = json.results.filter((item) => item.type == "Trailer");
    dispatch(addTrailerVideo(trailers[0]));
  };
  useEffect(() => {
    getMoviesData();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BEWz4SXfyCQ?si=KwJcFaGs0wdUQqAj"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
