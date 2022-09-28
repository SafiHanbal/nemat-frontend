export const selectCurrentUser = (state) => state.user.currentUser;

export const selectIsLoading = (state) => state.user.isLoading;

export const selectLoginError = (state) => state.user.loginError;

export const selectSignUpError = (state) => state.user.signUpError;

export const selectForgotPasswordError = (state) =>
  state.user.forgotPasswordError;

export const selectResetPasswordError = (state) =>
  state.user.resetPasswordError;

export const selectIsOptSent = (state) => state.user.isOtpSent;
