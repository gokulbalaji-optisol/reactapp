import { all } from "redux-saga/effects";
import { watchAuthAsync } from "./authSaga";
import { watchBannerAsync } from "./bannerSaga";
import { watchBookAsync } from "./bookSaga";
import { watchGenreAsync } from "./genreSaga";

export function* rootSaga() {
    yield all([
         watchAuthAsync(),
         watchGenreAsync(),
         watchBookAsync(),
         watchBannerAsync()
    ])
}