
export const fetchMovies=(sort)=>{
    return{
         type:"FETCH_MOVIES",
         sort
    }
}


export const addMovie=(newMovie)=>{
    return{
        type:"ADD_MOVIE",
        newMovie
    }
}

export const fetchSuccess=(receivedMovies)=>{
    return{
        type:"FETCH_SUCCEEDED",
        receivedMovies
    }
}
export const fetchFalied=(err)=>{
    return{
        type:"FETCH_FAILED",
        err
    }
}

export const putMovie=(movie,movieUpdate)=>{
    return{
        type:"PUT_MOVIE",
        movie,
        movieUpdate
    }
}

export const putSuccess=(preMovie,updateMovie)=>{
    return{
        type:"PUT_SUCCEEDED",
        preMovie,
        updateMovie
    }
}


export const deleteMovie=(id)=>{
    return{
        type:"DELETE_MOVIE",
        id
    }
}

export const deleteSuccess=(id)=>{
    return{
        type:"DELETE_SUCCEEDED",
       id
    }
}
