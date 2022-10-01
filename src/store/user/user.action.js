import { createAction } from '../../utils/create-action/create-action';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (payload) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, payload);

export const setToken = (payload) =>
  createAction(USER_ACTION_TYPES.SET_TOKEN, payload);

export const checkToken = (payload) =>
  createAction(USER_ACTION_TYPES.CHECK_TOKEN, payload);

export const loginStart = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_USER_START, payload);

export const loginSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_USER_SUCCESS, payload);

export const loginFailed = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_USER_FAILED, payload);

export const signUpStart = (payload) =>
  createAction(USER_ACTION_TYPES.SIGNUP_USER_START, payload);

export const signUpSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.SIGNUP_USER_SUCCESS, payload);

export const signUpFailed = (payload) =>
  createAction(USER_ACTION_TYPES.SIGNUP_USER_FAILED, payload);

export const forgotPasswordStart = (payload) =>
  createAction(USER_ACTION_TYPES.FORGOT_PASSWORD_START, payload);

export const forgotPasswordSucess = (payload) =>
  createAction(USER_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS, payload);

export const forgotPasswordFailed = (payload) =>
  createAction(USER_ACTION_TYPES.FORGOT_PASSWORD_FAILED, payload);

export const resetPasswordStart = (payload) =>
  createAction(USER_ACTION_TYPES.RESET_PASSWORD_START, payload);

export const resetPasswordSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.RESET_PASSWORD_SUCCESS, payload);

export const resetPasswordFailed = (payload) =>
  createAction(USER_ACTION_TYPES.RESET_PASSWORD_FAILED, payload);
