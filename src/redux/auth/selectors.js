export const selectUserData = (state) => state.auth.user;
export const selectUserLoading = (state) => state.auth.loading;
export const selectUserError = (state) => state.auth.error;
export const selectUserIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserToken = (state) => state.auth.token;
