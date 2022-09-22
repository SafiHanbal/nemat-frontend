import { createAction } from '../../utils/create-action/create-action';
import { CART_ACTION_TYPES } from './cart.types';

export const toggleCartDropdown = (payload) =>
  createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_ACTIVE, payload);
