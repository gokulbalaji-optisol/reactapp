import { createSlice } from "@reduxjs/toolkit";
import {bannerReducer} from "../reducers/bannerReducer";
const initialState = {
    loading: false,
    hasErrors: false,
    banners: [],
    banner:{}
} 
const bannerSlice = createSlice({
    name:'banners',
    initialState,
    reducers: bannerReducer
})


export const {getBanners , getBannerFailure , getBannerSuccess ,getBannerById , getBannerByIdSuccess , getBannerByIdFailure} = bannerSlice.actions;

export const bannerSelector = state => state.banners;

export default bannerSlice;
