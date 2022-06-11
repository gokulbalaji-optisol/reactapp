import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{ 
        isLoggedIn : false,
        user:null
    },
    reducers:{
        login(state , action){
            state.isLoggedIn = true;
            state.user = action.payload;

        },
        loginFailed:(state){
            state.isLoggedIn = true;
            state.user = null;

        },
        logout(state){
            state.isLoggedIn = false;
            state.user = {};
        },
    }
})


export const authActions = authSlice.actions;

export default authSlice;