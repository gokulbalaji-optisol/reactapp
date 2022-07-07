export const couponReducer = {
  getCoupons(state) {
    state.loading = true;
  },
  getCouponSuccess(state, action) {
    state.coupons = action.payload;
    state.loading = false;
    state.hasErrors = false;
  },
  getCouponFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
  getCouponById(state) {
    state.loading = true;
  },
  getCouponByIdSuccess(state, action) {
    state.coupon = action.payload;
    state.loading = false;
    state.hasErrors = false;
  },
  getCouponByIdFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },

  getPromoCodes(state) {
    state.loading = true;
  },
  getPromoCodeSuccess(state, action) {
    state.promocodes = action.payload;
    state.loading = false;
    state.hasErrors = false;
  },
  getPromoCodeFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
  getPromoCodeByCouponId(state) {
    state.loading = true;
  },
  getPromoCodeByCouponIdSuccess(state, action) {
    state.promocode = action.payload;
    state.loading = false;
    state.hasErrors = false;
  },
  getPromoCodeByCouponIdFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
};
