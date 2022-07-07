import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const user = token
  ? { user: JSON.parse(atob(token.split(".")[1])), token }
  : {};
const initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
  user: user,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authSliceLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    authSliceLogout(state) {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export const { authSliceLogin, authSliceLogout } = authSlice.actions;

export default authSlice;
