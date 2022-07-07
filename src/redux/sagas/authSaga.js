import { put, takeEvery } from "redux-saga/effects";
import { login } from "services/AuthServices";
import { authSliceLogin, authSliceLogout } from "../slices/auth-slice";
import sagaActions from "redux/sagaActions";
import { toast } from "react-toastify";
export function* userLogin(action) {
  let user;
  try {
    console.log("action payload", action);
    user = yield login(action.DataObj);
    yield put(authSliceLogin(user.data));
    // toast.success("Loggedin Successfully");
  } catch (err) {
    console.log(err, user);
    // toast.error("username/password is wrong");
  }
}

export function* userLogout() {
  console.log("loggingout");
  yield put(authSliceLogout());
}

export function* watchAuthAsync() {
  yield takeEvery(sagaActions.AUTH_LOGIN, userLogin);
  yield takeEvery(sagaActions.AUTH_LOGOUT, userLogout);
}
