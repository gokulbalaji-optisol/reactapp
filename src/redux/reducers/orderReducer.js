export const orderReducer = {
  getOrders(state) {
    state.loading = true;
  },
  getOrderSuccess(state, action) {
    state.orders = action.payload[0];
    state.orderCount = action.payload[1];
    state.loading = false;
    state.hasErrors = false;
  },
  getOrderFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
};
