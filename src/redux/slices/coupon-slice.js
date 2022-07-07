import { createSlice } from "@reduxjs/toolkit";
import { couponReducer } from "redux/reducers/couponReducer";

const initialState = {
  loading: false,
  hasErrors: false,
  coupons: [],
  coupon: {},
  promocodes: [],
  promocode: {},
};
const couponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: couponReducer,
});

export const {
  getCoupons,
  getCouponFailure,
  getCouponSuccess,
  getCouponById,
  getCouponByIdSuccess,
  getCouponByIdFailure,
  getPromoCodes,
  getPromoCodeFailure,
  getPromoCodeSuccess,
  getPromoCodeByCouponId,
  getPromoCodeByCouponIdSuccess,
  getPromoCodeByCouponIdFailure,
} = couponSlice.actions;

export const couponSelector = (state) => state.coupons;

export default couponSlice;
