const reducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "GET_STORIES":
            return{
                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages
            };
        case "REMOVE_POST":
            return{
                ...state,
                hits:state.hits.filter((curElement)=> curElement.objectID !== action.payload)
            }   
        case "SEARCH_POST":
            return{
                ...state,
                query:action.payload
            }    
        case "PREV_POST":
            let pageNum=state.page;
            if(pageNum <=0){
                pageNum =0;
            }
            else{
                pageNum=pageNum-1;
            }
            return{
                ...state,
                page:pageNum
            } 
        case "NEXT_POST":
            let nextNum=state.page;
            if(nextNum >=50){
                nextNum =0;
            }
            else{
                nextNum=nextNum+1
            }
            return{
                ...state,
                page:state.page + 1
            }  
    }
    return {...state}
}

export default reducer;