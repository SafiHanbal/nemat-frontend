import { ME_ACTION_TYPES } from './me.types';

export const ME_INITIAL_VALUE = {
  updateMeLoading: false,
  updateMeError: null,
  updatePasswordLoading: false,
  updatePasswordError: null,
  logoutLoading: false,
  logoutError: null,
  activeSetting: 'home',
};

export const meReducer = (state = ME_INITIAL_VALUE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ME_ACTION_TYPES.UPDATE_ME_START:
      return {
        ...state,
        updateMeLoading: true,
      };
    case ME_ACTION_TYPES.UPDATE_ME_SUCCESS:
      return {
        ...state,
        updateMeLoading: false,
      };
    case ME_ACTION_TYPES.UPDATE_ME_FAILED:
      return {
        ...state,
        updateMeLoading: false,
        updateMeError: payload,
      };
    case ME_ACTION_TYPES.UPDATE_PASSWORD_START:
      return {
        ...state,
        updatePasswordLoading: true,
      };
    case ME_ACTION_TYPES.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        updatePasswordLoading: false,
        updatePasswordError: null,
      };
    case ME_ACTION_TYPES.UPDATE_PASSWORD_FAILED:
      return {
        ...state,
        updatePasswordLoading: false,
        updatePasswordError: payload,
      };
    case ME_ACTION_TYPES.LOGOUT_START:
      return {
        ...state,
        logoutLoading: true,
      };
    case ME_ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
      };
    case ME_ACTION_TYPES.LOGOUT_FAILED:
      return {
        ...state,
        logoutLoading: false,
        logoutError: null,
      };
    case ME_ACTION_TYPES.SET_ACTIVE_SETTING:
      return {
        ...state,
        activeSetting: payload,
      };

    default:
      return state;
  }
};
