import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    
  return (
    
    <div className='mt-16'>
            <h1 className='text-4xl mb-4 font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll hide-scrollbar'>
            <div className='flex '>
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            
            </div>
        </div>
    </div>
  )
}

export default MovieList