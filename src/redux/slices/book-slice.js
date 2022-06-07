import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBook } from "services/BookServices";
import {bookReducer} from "../reducers/bookReducer";

const initialState = {
    loading: false,
    hasErrors: false,
    filters:false,
    bookFilters:{
        genre:[],
        rating:null,
        range:[]
    },
    books: [],
    bookCount:0
} 
const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:bookReducer
})


export const {getBooks , getBookFailure , getBookSuccess,  setBookFilters} = bookSlice.actions;

export const bookSelector = state => state.books;

export default bookSlice;

export const fetchBookData = (props) => {
    console.log("props",props);
    return async (dispatch ) => {
        dispatch(getBooks())
        try{
            const response = await fetchAllBook(props);
            console.log('dispatch',response)
            const data = response.data;
            dispatch(getBookSuccess(data))
        }catch(error){
            console.log(error)
            dispatch(getBookFailure())
        }
    }
        
}