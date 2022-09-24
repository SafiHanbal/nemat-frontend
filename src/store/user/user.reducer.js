import { USER_ACTION_TYPES } from './user.types';

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USER_ACTION_TYPES.LOGIN_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGNUP_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGNUP_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
