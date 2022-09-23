import { createAction } from '../../utils/create-action/create-action';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (payload) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, payload);
