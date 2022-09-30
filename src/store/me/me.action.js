import { createAction } from '../../utils/create-action/create-action';
import { ME_ACTION_TYPES } from './me.types';

export const updateMeStart = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_ME_START, payload);

export const updateMeSucess = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_ME_SUCCESS, payload);

export const updateMeFailed = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_ME_FAILED, payload);

export const updatePasswordStart = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_PASSWORD_START, payload);

export const updatePasswordSuccess = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_PASSWORD_SUCCESS, payload);

export const updatePasswordFailed = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_PASSWORD_FAILED, payload);

export const logoutStart = (payload) =>
  createAction(ME_ACTION_TYPES.LOGOUT_START, payload);

export const logoutSucess = (payload) =>
  createAction(ME_ACTION_TYPES.LOGOUT_SUCCESS, payload);

export const logoutFailed = (payload) =>
  createAction(ME_ACTION_TYPES.LOGOUT_FAILED, payload);

export const setActiveSetting = (payload) =>
  createAction(ME_ACTION_TYPES.SET_ACTIVE_SETTING, payload);
