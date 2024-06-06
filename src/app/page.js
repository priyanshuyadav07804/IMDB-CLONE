import Result from '@/components/Result'
import React from 'react'
const API_KEY = process.env.API_KEY

const page = async({searchParams}) => {
  const genre = searchParams.genre || 'fetchTrending'

  const res = await fetch(`https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? `/movie/top_rated`:`/trending/all/week`}?api_key=${API_KEY}&language=en-us&page=1`,{next:{revalidate:1}})

    const data = await res.json()
    if(!res.ok){
      throw new Error('Failed to fetch Data')
    }

    const result = data.results

  return (
    <div>
      <Result result={result}/>
      
    </div>
  )
}

export default page
