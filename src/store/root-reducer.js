import { combineReducers } from 'redux';

import { cartReducer } from './cart/cart.reducer';
import { userReducer } from './user/user.reducer';
import { menuReducer } from './menu/menu.reducer';
import { meReducer } from './me/me.reducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  cart: cartReducer,
  me: meReducer,
});
