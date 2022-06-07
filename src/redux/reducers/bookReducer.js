export const bookReducer = {
    getBooks(state){
        state.loading = true;
    },
    getBookSuccess(state , action){
        state.books = action.payload[0]
        state.booksCount = action.payload[1]
        state.loading = false
        state.hasErrors = false
    },
    getBookFailure(state){
        state.loading = false;
        state.hasErrors = true;
    },
    setBookFilters(state,action){
        state.filters = action.payload;
    }
}