import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
  isCartActive: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_CART_ACTIVE:
      return {
        ...state,
        isCartActive: payload,
      };

    default:
      return state;
  }
};
