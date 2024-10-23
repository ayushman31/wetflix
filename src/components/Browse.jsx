import React, {useEffect} from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse