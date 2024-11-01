import React, {useEffect} from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import Search from './Search';


const Browse = () => {
  const search = useSelector(store => store.search.showSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (search) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [search]);

  return (
    <>
    {search && <div>
      <Search />
      </div>
    } {
      <div className={search ? 'blur-lg ' : ''}>
       <MainContainer />
      <SecondaryContainer />
      </div>
    }
      </>
  )
}

export default Browse