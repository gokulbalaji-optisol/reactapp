import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";

const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
  usersCount: 0,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: userReducer,
});

export const { getUsers, getUserFailure, getUserSuccess } = userSlice.actions;

export const userSelector = (state) => state.users;

export default userSlice;
