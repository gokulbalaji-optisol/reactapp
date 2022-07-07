import { put, takeEvery } from "redux-saga/effects";
import {
  getOrders,
  getOrderSuccess,
  getOrderFailure,
} from "../slices/order-slice";
import sagaActions from "redux/sagaActions";
import {
  fetchAllOrder,
  fetchAllSellerOrder,
  fetchUserOrder,
} from "services/OrderServices";
export function* fetchAdminOrder(action) {
  yield put(getOrders());
  try {
    const response = yield fetchAllOrder(action);
    console.log("dispatch", response);
    const data = response.data;
    yield put(getOrderSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getOrderFailure());
  }
}

export function* fetchSellerOrder(action) {
  yield put(getOrders());
  try {
    const response = yield fetchAllSellerOrder(action);
    console.log("dispatch", response);
    const data = response.data;
    yield put(getOrderSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getOrderFailure());
  }
}

export function* fetchOrder(action) {
  yield put(getOrders());
  try {
    const response = yield fetchUserOrder(action);
    console.log("dispatch", response);
    const data = response.data[0];
    console.log("orders", data[0].order_id);
    yield put(getOrderSuccess([data[0].order_id, response.data[1]]));
  } catch (error) {
    console.log(error);
    yield put(getOrderFailure());
  }
}

export function* watchOrderAsync() {
  yield takeEvery(sagaActions.ADMIN_FETCH_ORDER, fetchAdminOrder);
  yield takeEvery(sagaActions.SELLER_FETCH_ORDER, fetchSellerOrder);
  yield takeEvery(sagaActions.FETCH_ORDER, fetchOrder);
}
