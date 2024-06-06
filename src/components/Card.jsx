'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({movie}) => {
  const [imgSrc, setImgSrc] = useState('/skeleton.gif')

  const handleError = () => {
      setImgSrc('https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png')
    }

    const handleLoaded = () =>{
      setImgSrc(`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`)
    }

  return (
    <div className=' cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 px-1 sm:px-0'> 
      <Link href={`/movie/${movie.id}`}>
        <Image src={imgSrc} alt={movie.title || movie.name} width={500} height={300} priority={true} onError={handleError} onLoad={handleLoaded} 
        className=' rounded-lg hover:opacity-75 transition-opacity duration-300 mx-auto '
        ></Image>
        
        <div className='p-2 '>
          <p className=' line-clamp-2 text-md'>
            {movie.overview}</p>
            <h2 className='text-lg font-bold truncate'>{movie.title || movie.name}</h2>
            <p className='flex items-center'>{movie.release_date || movie.first_air_date}
            <FiThumbsUp className='h-5 mr-1 ml-3'/>
            {movie.vote_count}
            </p>
            
            
        </div>
      </Link>
    </div>
  )
}

export default Card
