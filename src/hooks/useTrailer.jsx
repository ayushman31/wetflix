import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
    const dispatch = useDispatch();
  
    const getMoviesData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
  
      const trailers = json.results.filter((item) => item.type === "Teaser");
      if (trailers.length > 0) {
        dispatch(addTrailerVideo(trailers[0]));
      }
    };
  
    useEffect(() => {
      getMoviesData();
    }, [movieId]);
}

export default useTrailer;