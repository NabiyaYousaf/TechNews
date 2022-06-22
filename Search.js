import React from 'react'
import { useGolobalContext } from './context'
const Search = () => {
  const {query,searchPost}=useGolobalContext();
  return (
    <>
      <div className='search'>
        <h2 className='heading'>News From Real Time API</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" placeholder='search here...' value={query} onChange={(e)=>searchPost(e.target.value)} />
        </form>
      </div>
    </>
  )
}

export default Search