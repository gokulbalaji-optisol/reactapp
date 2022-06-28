import { createSlice } from "@reduxjs/toolkit";
import { cartReducer } from "redux/reducers/cartReducer";

const initialState = {
    loading: false,
    hasErrors: false,
    carts: [],
    cartCount:0
} 
const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers: cartReducer
})


export const {getCarts , getCartFailure , getCartSuccess} = cartSlice.actions;

export const cartSelector = state => state.carts;

export default cartSlice;
