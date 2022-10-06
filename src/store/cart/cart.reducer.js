import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  confirmOrderLoading: false,
  orderConfirmed: false,
  userOrders: [],
  userOrdersLoading: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART_START:
      return {
        ...state,
      };
    case CART_ACTION_TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.REMOVE_FROM_CART_START:
      return {
        ...state,
      };
    case CART_ACTION_TYPES.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.COD_ORDER_START:
      return {
        ...state,
        confirmOrderLoading: true,
      };
    case CART_ACTION_TYPES.COD_ORDER_SUCCESS:
      return {
        ...state,
        confirmOrderLoading: false,
      };
    case CART_ACTION_TYPES.COD_ORDER_FAILED:
      return {
        ...state,
        confirmOrderLoading: false,
      };
    case CART_ACTION_TYPES.CARD_ORDER_START:
      return {
        ...state,
        confirmOrderLoading: true,
      };
    case CART_ACTION_TYPES.CARD_ORDER_SUCCESS:
      return {
        ...state,
        confirmOrderLoading: false,
      };
    case CART_ACTION_TYPES.CARD_ORDER_FAILED:
      return {
        ...state,
        confirmOrderLoading: false,
      };
    case CART_ACTION_TYPES.SET_ORDER_CONFIRMED:
      return {
        ...state,
        orderConfirmed: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.GET_USER_ORDER_START:
      return {
        ...state,
        userOrdersLoading: true,
      };
    case CART_ACTION_TYPES.GET_USER_ORDER_SUCCESS:
      return {
        ...state,
        userOrdersLoading: false,
        userOrders: payload,
      };
    case CART_ACTION_TYPES.GET_USER_ORDER_FAILED:
      return {
        ...state,
        userOrdersLoading: false,
      };

    default:
      return state;
  }
};
