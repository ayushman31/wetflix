import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 mr-4  hover:border-red-700 hover:border-4'>
        <img alt='moviecard' src={IMG_CDN_URL+posterPath} className='' />
    </div>
  )
}

export default MovieCard