export const genreReducer =  {
    getGenres(state){
        state.loading = true;
    },
    getGenreSuccess(state , action){
        state.genres = action.payload[0]
        state.genreCount = action.payload[1]
        state.loading = false
        state.hasErrors = false
    },
    getGenreFailure(state){
        state.loading = false;
        state.hasErrors = true;
    },
}