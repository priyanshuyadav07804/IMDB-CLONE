import Result from '@/components/Result'
import React from 'react'


const SearchPage = async({params}) => {
    const searchTerm = params.searchTerm
    console.log(params)
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US$page=1$include_adult=false`,{
      headers: {
        'Cache-Control': 'no-store'
      }
    })
    const data = await res.json()
    const results = data.results

  return (
    <div>
      {results && results.length === 0 ? (
                <h1 className='text-center pt-6'>No results found</h1>
            ) : (
                <Result result={results}/>
            )}
    </div>
  )
}

export default SearchPage
