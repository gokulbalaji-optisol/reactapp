export const userReducer = {
  getUsers(state) {
    state.loading = true;
  },
  getUserSuccess(state, action) {
    state.users = action.payload[0];
    state.usersCount = action.payload[1];
    state.loading = false;
    state.hasErrors = false;
  },
  getUserFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
};
