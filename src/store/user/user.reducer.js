import { USER_ACTION_TYPES } from './user.types';

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  loginError: null,
  signUpError: null,
  forgotPasswordError: null,
  resetPasswordError: null,
  isOtpSent: false,
};

const setIsLoading = (state, isLoading) => ({ ...state, isLoading });

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.LOGIN_USER_START:
      return setIsLoading(state, true);
    case USER_ACTION_TYPES.LOGIN_USER_SUCCESS:
      return setIsLoading(state, false);
    case USER_ACTION_TYPES.LOGIN_USER_FAILED:
      return {
        ...setIsLoading(state, false),
        loginError: payload,
      };
    case USER_ACTION_TYPES.SIGNUP_USER_START:
      return setIsLoading(state, true);
    case USER_ACTION_TYPES.SIGNUP_USER_SUCCESS:
      return setIsLoading(state, false);
    case USER_ACTION_TYPES.SIGNUP_USER_FAILED:
      return {
        ...setIsLoading(state, false),
        signUpError: payload,
      };
    case USER_ACTION_TYPES.FORGOT_PASSWORD_START:
      return setIsLoading(state, true);
    case USER_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...setIsLoading(state, false),
        isOtpSent: true,
      };
    case USER_ACTION_TYPES.FORGOT_PASSWORD_FAILED:
      return {
        ...setIsLoading(state, false),
        forgotPasswordError: payload,
      };
    case USER_ACTION_TYPES.RESET_PASSWORD_START:
      return setIsLoading(state, true);
    case USER_ACTION_TYPES.RESET_PASSWORD_SUCCESS:
      return setIsLoading(state, false);
    case USER_ACTION_TYPES.RESET_PASSWORD_FAILED:
      return {
        ...setIsLoading(state, false),
        resetPasswordError: payload,
      };

    default:
      return state;
  }
};
