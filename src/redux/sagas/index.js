import { all } from "redux-saga/effects";
import { watchAuthAsync } from "./authSaga";
import { watchGenreAsync } from "./genreSaga";

export function* rootSaga() {
    yield all([
         watchAuthAsync(),
         watchGenreAsync()
    ])
}