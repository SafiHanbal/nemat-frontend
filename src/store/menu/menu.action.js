import { createAction } from '../../utils/create-action/create-action';
import { MENU_ACTION_TYPES } from './menu.types';

export const fetchMenuStart = (payload) =>
  createAction(MENU_ACTION_TYPES.FETCH_MENU_ITEMS_START, payload);

export const fetchMenuSuccess = (payload) =>
  createAction(MENU_ACTION_TYPES.FETCH_MENU_ITEMS_SUCCESS, payload);

export const fetchMenuFailed = (payload) =>
  createAction(MENU_ACTION_TYPES.FETCH_MENU_ITEMS_FAILED, payload);

export const changeDisplayItems = (payload) =>
  createAction(MENU_ACTION_TYPES.CHANGE_DISPLAY_ITEMS, payload);

export const fetchMenuItemStart = (payload) =>
  createAction(MENU_ACTION_TYPES.FETCH_MENU_ITEM_START, payload);

export const fetchMenuItemSuccess = (payload) =>
  createAction(MENU_ACTION_TYPES.FETCH_MENU_ITEM_SUCCESS, payload);

export const fetchMenuItemFailed = (payload) =>
  createAction(MENU_ACTION_TYPES.FETCH_MENU_ITEM_FAILED, payload);
