import {configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import authSlice from './slices/auth-slice';
import bookSlice from './slices/book-slice';
import genreSlice from './slices/genre-slice';
import { rootSaga } from './sagas';

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        genres: genreSlice.reducer,
        books: bookSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>   
    getDefaultMiddleware().concat(middleware)
});
sagaMiddleware.run(rootSaga)

export default store;