import { MENU_ACTION_TYPES } from './menu.types';

const MENU_INITIAL_STATE = {
  starter: [],
  mainCourse: [],
  bread: [],
  rice: [],
  desert: [],
  sides: [],
  displayItems: [],
  category: '',
  currentMenuItem: [],
  isMenuItemLoading: false,
};

export const menuReducer = (state = MENU_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MENU_ACTION_TYPES.FETCH_MENU_ITEMS_START:
      return {
        ...state,
        ...payload,
      };
    case MENU_ACTION_TYPES.FETCH_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case MENU_ACTION_TYPES.FETCH_MENU_ITEMS_FAILED:
      return {
        ...state,
        ...payload,
      };
    case MENU_ACTION_TYPES.CHANGE_DISPLAY_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case MENU_ACTION_TYPES.FETCH_MENU_ITEM_START:
      return {
        ...state,
        isMenuItemLoading: true,
        menuItemSlug: payload,
      };
    case MENU_ACTION_TYPES.FETCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        isMenuItemLoading: false,
        currentMenuItem: payload,
      };
    case MENU_ACTION_TYPES.FETCH_MENU_ITEM_FAILED:
      return {
        ...state,
        isMenuItemLoading: false,
      };

    default:
      return state;
  }
};
