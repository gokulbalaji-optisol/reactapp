import { createSlice } from "@reduxjs/toolkit";
import {orderReducer} from "../reducers/orderReducer";

const initialState = {
    loading: false,
    hasErrors: false,
    orders: [],
    ordersCount:0
} 
const orderSlice = createSlice({
    name:'orders',
    initialState,   
    reducers:orderReducer
})


export const {getOrders , getOrderFailure , getOrderSuccess} = orderSlice.actions;

export const orderSelector = state => state.orders;

export default orderSlice;
