import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    console.log(movies);
    
  return (
    
    <div className='mb-10 '>
            <h1 className='text-4xl mb-4 font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll hide-scrollbar'>
            <div className='flex '>
                {movies?.map(movie => <MovieCard posterPath={movie.poster_path} />)}
            
            </div>
        </div>
    </div>
  )
}

export default MovieList