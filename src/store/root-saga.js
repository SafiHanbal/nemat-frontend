import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/user.saga';
import { menuSaga } from './menu/menu.saga';
import { meSaga } from './me/me.saga';
import { cartSaga } from './cart/cart.saga';

export function* rootSaga() {
  yield all([call(userSaga), call(menuSaga), call(meSaga), call(cartSaga)]);
}
