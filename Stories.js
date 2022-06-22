import React from 'react'
import { useGolobalContext } from './context'
const Stories = () => {

    const{hits,nbPages,isLoading,removePost}=useGolobalContext();

 

    // let isLoading=true;

    if(isLoading){
        return <div className='loading'>Loading....</div>
    }
  return (
    <>
    
    <div className="stories_div"> 
        {
            hits.map((curPost)=>{
                const{url,num_comments,title,author,objectID}=curPost;
                return(
                    <div key={objectID} className='main-story'>
                        <h3>{title}</h3>
                        <p> <span> {author} </span>  | <span>{num_comments}</span> comments </p>
                        <div className="buttons">
                            <a href={url} target="_blank" className="readmore">ReadMore</a>
                            <a href="#" className="remove" onClick={()=>removePost(objectID)}>Remove</a>
                        </div>
                    </div>
                    
                
                )
            })
        }
    </div>

    </>
  )
}

export default Stories