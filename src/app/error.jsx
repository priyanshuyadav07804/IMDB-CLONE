'use client'
import React, { useEffect } from 'react'

const error = ({error,reset}) => {
    useEffect(()=>{
        console.log(error)
    },[])
  return (
    <div className='text-center mt-10 '>
      <h1>Something went wrong</h1>
      <button className='hover:text-amber-400 bg-teal-600 px-4 py-2 mt-4 font-semibold rounded-lg text-white' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error
