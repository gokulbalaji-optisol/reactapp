import { all } from "redux-saga/effects";
import { watchAuthAsync } from "./authSaga";
import { watchBannerAsync } from "./bannerSaga";
import { watchBookAsync } from "./bookSaga";
import { watchGenreAsync } from "./genreSaga";
import { watchOrderAsync } from "./orderSaga";
import { watchUserAsync } from "./userSaga";

export function* rootSaga() {
  yield all([
    watchAuthAsync(),
    watchGenreAsync(),
    watchBookAsync(),
    watchBannerAsync(),
    watchOrderAsync(),
    watchUserAsync(),
  ]);
}
