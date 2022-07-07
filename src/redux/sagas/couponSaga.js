import { put, takeEvery } from "redux-saga/effects";
import { couponServices } from "services/CouponServices";
import {
  getCouponById,
  getCouponFailure,
  getCoupons,
  getCouponSuccess,
  getPromoCodeByCouponId,
  getPromoCodeByCouponIdFailure,
  getPromoCodeByCouponIdSuccess,
  getPromoCodeFailure,
  getPromoCodes,
  getPromoCodeSuccess,
} from "../slices/coupon-slice";
import sagaActions from "redux/sagaActions";
export function* fetchCoupon(action) {
  console.log(action.action);
  yield put(getCoupons());
  try {
    const response = yield couponServices.listAllCoupons(action.action);
    console.log("dispatch", response);
    const data = response.data.data;
    yield put(getCouponSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getCouponFailure());
  }
}

// export function* fetch_Coupon_By_Id(action) {
//   console.log(action);
//   yield put(getCouponById());
//   try {
//     const response = yield couponServices(action.action.id);
//     console.log("dispatch", response);
//     const data = response.data;
//     yield put(getBannerByIdSuccess(data));
//   } catch (error) {
//     console.log(error);
//     yield put(getBannerByIdFailure());
//   }
// }

export function* fetchPromoCode() {
  yield put(getPromoCodes());
  try {
    const response = yield couponServices.listAllPromoCodes();
    console.log("dispatch", response);
    const data = response.data;
    yield put(getPromoCodeSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getPromoCodeFailure());
  }
}

export function* fetch_PromoCode_By_Id(action) {
  console.log(action, action.action.promocode);
  yield put(getPromoCodeByCouponId());
  try {
    let obj = {
      coupon: action.action.promocode,
    };
    console.log(obj);
    const response = yield couponServices.getPromoCodeByCouponId(obj);
    console.log("dispatch", response);
    const data = response.data;
    yield put(getPromoCodeByCouponIdSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getPromoCodeByCouponIdFailure());
  }
}
export function* watchCouponAsync() {
  yield takeEvery(sagaActions.FETCH_COUPON, fetchCoupon);
  //  yield takeEvery(sagaActions.FETCH_COUPON_BY_ID, fetch_Coupon_By_Id);
  yield takeEvery(sagaActions.FETCH_PROMOCODE, fetchPromoCode);
  yield takeEvery(sagaActions.FETCH_PROMOCODE_BY_ID, fetch_PromoCode_By_Id);
}
