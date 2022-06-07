import {configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import bookSlice from './slices/book-slice';
import genreSlice from './slices/genre-slice';
const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        genres: genreSlice.reducer,
        books: bookSlice.reducer
    }
});

export default store;