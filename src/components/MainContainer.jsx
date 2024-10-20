import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);

    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie.original_title);
    
    
  return (
    <div>
        <VideoTitle />
        <VideoBackground />
    </div>
  )
}

export default MainContainer