import { put, takeEvery } from "redux-saga/effects";
import { getBooks, getBookSuccess, getBookFailure } from "../slices/book-slice";
import sagaActions from "redux/sagaActions";
import { fetchAllBook } from "services/BookServices";
export function* fetchBook(action) {
  yield put(getBooks());
  try {
    const response = yield fetchAllBook({ data: action.action });
    console.log("dispatch", response);
    const data = response.data;
    yield put(getBookSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getBookFailure());
  }
}

export function* fetchSellerBook(action) {
  yield put(getBooks());
  try {
    const response = yield fetchSellerBook({
      data: action.action,
      url: "seller",
    });
    console.log("dispatch", response);
    const data = response.data;
    yield put(getBookSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getBookFailure());
  }
}
export function* watchBookAsync() {
  yield takeEvery(sagaActions.FETCH_BOOK, fetchBook);
  yield takeEvery(sagaActions.SELLER_FETCH_BOOK, fetchSellerBook);
}
