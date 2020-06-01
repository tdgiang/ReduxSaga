
const movieReducer=(movies=[],action)=>{
    switch (action.type) {
        case "FETCH_SUCCEEDED":
            return action.receivedMovies;
        case "PUT_SUCCEEDED":
            return (
                movies.map(e=>{
                    if(e._id!=action.preMovie._id)
                        return e;
                    else
                        return(
                            {...e,name:action.updateMovie.name,year:action.updateMovie.year}
                        )
                })
            )
        case "DELETE_SUCCEEDED":
            return(
                movies.filter(e=>e._id!=action.id)
            )
        case "FETCH_FAILED":
            return [];

        default:
            return movies;
    }
}

export default movieReducer;