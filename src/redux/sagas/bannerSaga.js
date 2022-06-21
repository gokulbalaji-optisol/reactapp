import { put, takeEvery } from "redux-saga/effects";
import { fetchAllBanner, fetchBannerById } from "services/BannerServices";
import {
  getBanners,
  getBannerFailure,
  getBannerSuccess,
  getBannerById,
  getBannerByIdSuccess,
  getBannerByIdFailure,
} from "../slices/banner-slice";
import sagaActions from "redux/sagaActions";
export function* fetchBanner() {
  yield put(getBanners());
  try {
    const response = yield fetchAllBanner();
    console.log("dispatch", response);
    const data = response.data;
    yield put(getBannerSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getBannerFailure());
  }
}

export function* fetch_Banner_By_Id(action) {
  console.log(action);
  yield put(getBannerById());
  try {
    const response = yield fetchBannerById(action.action.id);
    console.log("dispatch", response);
    const data = response.data;
    yield put(getBannerByIdSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getBannerByIdFailure());
  }
}

export function* watchBannerAsync() {
  yield takeEvery(sagaActions.FETCH_BANNER, fetchBanner);
  yield takeEvery(sagaActions.FETCH_BANNER_BY_ID, fetch_Banner_By_Id);
}
