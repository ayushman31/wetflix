import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-full aspect-video bg-gradient-to-r from-black  pt-96 px-20 absolute text-white z-10'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='w-3/5 py-6'>{overview}</p>

        <div className=''>
            <button className='mr-4 bg-white text-black p-2 w-24 rounded-sm font-bold'>▶  Play</button>
            <button className='mr-4 bg-gray-400 text-white opacity-45 p-2 w-32 rounded-sm font-bold'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle