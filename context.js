import React, { useContext,useReducer,useEffect } from 'react';
import reducer from './reducer';
// create Context
const AppContext=React.createContext();

let Api="http://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading:true,
    query:"html",
    page:0,
    nbPages:0,
    hits:[]
}

//create provider
const AppProvider = ({children}) => {

    const[state,dispatch]=useReducer(reducer,initialState);

    
    

   const fetchApiData=async(url)=>{

    dispatch({ type: "SET_LOADING" });

        try {
            const res=await fetch(url);
            const data =await res.json();
            console.log(data);
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            })
            // isLoading=false;
        } catch (error) {   
            console.log(error);
        }

    }

    //remove Post
    const removePost=(post_ID)=>{
        dispatch({type:"REMOVE_POST",payload:post_ID});
    }

    //search Post

    const searchPost=(search_Post)=>{
        dispatch({type:"SEARCH_POST",payload:search_Post})
    }

    //prev Post

    const prevPost=(prev_post)=>{
        dispatch({type:"PREV_POST",payload:prev_post})
    }

    //next Post

    const nextPost=(next_post)=>{
        dispatch({type:"NEXT_POST",payload:next_post})
    }

    useEffect(()=>{
        fetchApiData(`${Api}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);
    
  return (
    <AppContext.Provider value={{...state,removePost,searchPost,prevPost,nextPost}}>
        {children}
    </AppContext.Provider>
  );
}

const useGolobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider,useGolobalContext};