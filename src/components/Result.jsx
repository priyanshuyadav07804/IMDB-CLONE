import React from 'react'
import Card from './Card'

const Result = ({result}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:lg-grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 '>
      {
        result.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
        ))
      }
    </div>
  )
}

export default Result
