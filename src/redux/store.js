import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import authSlice from "./slices/auth-slice";
import bookSlice from "./slices/book-slice";
import genreSlice from "./slices/genre-slice";
import { rootSaga } from "./sagas";
import bannerSlice from "./slices/banner-slice";
import orderSlice from "./slices/order-slice";
import userSlice from "./slices/user-slice";
import cartSlice from "./slices/cart-slice";
import couponSlice from "./slices/coupon-slice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    genres: genreSlice.reducer,
    books: bookSlice.reducer,
    banners: bannerSlice.reducer,
    orders: orderSlice.reducer,
    users: userSlice.reducer,
    carts: cartSlice.reducer,
    coupons: couponSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});
sagaMiddleware.run(rootSaga);

export default store;
