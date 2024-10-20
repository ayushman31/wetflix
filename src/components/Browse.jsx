import React, {useEffect} from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';


const Browse = () => {
  
  useNowPlayingMovies();


  return (
    <div></div>
  )
}

export default Browse