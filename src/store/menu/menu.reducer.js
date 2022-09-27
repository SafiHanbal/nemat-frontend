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

    default:
      return state;
  }
};
