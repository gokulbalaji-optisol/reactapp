export const bannerReducer = {
  getBanners(state) {
    state.loading = true;
  },
  getBannerSuccess(state, action) {
    state.banners = action.payload;
    state.loading = false;
    state.hasErrors = false;
  },
  getBannerFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
  getBannerById(state) {
    state.loading = true;
  },
  getBannerByIdSuccess(state, action) {
    state.banner = action.payload;
    state.loading = false;
    state.hasErrors = false;
  },
  getBannerByIdFailure(state) {
    state.loading = false;
    state.hasErrors = true;
  },
};
