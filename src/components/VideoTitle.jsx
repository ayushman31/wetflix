import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-96 px-20'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='w-3/5 py-6'>{overview}</p>

        <div className=''>
            <button className='mr-4 bg-gray-100  p-2 w-24 rounded-sm'>▶️  Play</button>
            <button className='mr-4 bg-gray-400 text-white  p-2 w-32 rounded-sm'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle