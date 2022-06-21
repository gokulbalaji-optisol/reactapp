import { put, takeEvery } from "redux-saga/effects";
import { getUsers, getUserSuccess, getUserFailure } from "../slices/user-slice";
import sagaActions from "redux/sagaActions";
import { fetchAllUser } from "services/UserServices";
export function* fetchUser(action) {
  yield put(getUsers());
  try {
    const response = yield fetchAllUser(action);
    console.log("dispatch", response);
    const data = response.data;
    yield put(getUserSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getUserFailure());
  }
}

export function* watchUserAsync() {
  yield takeEvery(sagaActions.ADMIN_FETCH_USER, fetchUser);
}
