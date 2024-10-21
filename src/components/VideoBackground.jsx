import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
    const trailer = useSelector((store) => store.movies.trailerVideo);
    useTrailer(movieId)


  return (
    <div>
  {trailer ? (
    <iframe
      className="w-full aspect-video object-cover brightness-50"
      src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&frameborder=0&controls=0&showinfo=0&loop=1&playlist=${trailer.key}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      frameBorder="0"
    ></iframe>
  ) : (
    <p>Loading...</p>
  )}
</div>

  );
};

export default VideoBackground;
