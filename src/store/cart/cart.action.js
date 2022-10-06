import { createAction } from '../../utils/create-action/create-action';
import { CART_ACTION_TYPES } from './cart.types';

export const addToCartStart = (payload) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART_START, payload);

export const addToCartSuccess = (payload) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART_SUCCESS, payload);

export const removeFromCartStart = (payload) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART_START, payload);

export const removeFromCartSuccess = (payload) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART_SUCCESS, payload);

export const codOrderStart = (payload) =>
  createAction(CART_ACTION_TYPES.COD_ORDER_START, payload);

export const codOrderSuccess = (payload) =>
  createAction(CART_ACTION_TYPES.COD_ORDER_SUCCESS, payload);

export const codOrderFailed = (payload) =>
  createAction(CART_ACTION_TYPES.COD_ORDER_FAILED, payload);

export const cardOrderStart = (payload) =>
  createAction(CART_ACTION_TYPES.CARD_ORDER_START, payload);

export const cardOrderSuccess = (payload) =>
  createAction(CART_ACTION_TYPES.CARD_ORDER_SUCCESS, payload);

export const cardOrderFailed = (payload) =>
  createAction(CART_ACTION_TYPES.CARD_ORDER_FAILED, payload);

export const setOrderConfirmed = (payload) =>
  createAction(CART_ACTION_TYPES.SET_ORDER_CONFIRMED, payload);

export const setCartItems = (payload) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);

export const getUserOrderStart = (payload) =>
  createAction(CART_ACTION_TYPES.GET_USER_ORDER_START, payload);

export const getUserOrderSuccess = (payload) =>
  createAction(CART_ACTION_TYPES.GET_USER_ORDER_SUCCESS, payload);

export const getUserOrderFailed = (payload) =>
  createAction(CART_ACTION_TYPES.GET_USER_ORDER_FAILED, payload);
