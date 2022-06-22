import React from 'react'
import { useGolobalContext } from './context'

const Pagination = () => {
  const {page,nbPages,prevPost,nextPost}=useGolobalContext();
  return (
    <>
     <div className='pagination_btns'>
      <button onClick={prevPost}>Prev</button>
      <p>{page +1} to {nbPages}</p>
      <button onClick={nextPost}>Next</button>

     </div> 
    </>
  )
}

export default Pagination