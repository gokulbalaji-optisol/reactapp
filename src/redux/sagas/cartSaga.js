import { put, takeEvery } from "redux-saga/effects";
import sagaActions from "redux/sagaActions";
import {
  getCartFailure,
  getCarts,
  getCartSuccess,
} from "redux/slices/cart-slice";
import { cartServices } from "services/CartServices";
export function* fetchCart(action) {
  yield put(getCarts());
  try {
    const response = yield cartServices.fetchAllCart(action);
    console.log("dispatch", response);
    const data = response.data;
    yield put(getCartSuccess([data.cart_books, data.cart_books.length]));
  } catch (error) {
    console.log(error);
    yield put(getCartFailure());
  }
}

export function* watchCartAsync() {
  yield takeEvery(sagaActions.FETCH_CART, fetchCart);
}
