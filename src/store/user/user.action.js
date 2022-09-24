import { createAction } from '../../utils/create-action/create-action';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (payload) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, payload);

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
