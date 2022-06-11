import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{ 
        isLoggedIn : false,
        user:{}
    },
    reducers:{
        authSliceLogin(state , action){
            state.isLoggedIn = true;
            state.user = action.payload;

        },
        authSliceLogout(state){
            state.isLoggedIn = false;
            state.user = {};
        },
    }
})


export const {authSliceLogin , authSliceLogout} = authSlice.actions;

export default authSlice;