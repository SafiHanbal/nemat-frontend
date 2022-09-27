import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/user.saga';
import { menuSaga } from './menu/menu.saga';

export function* rootSaga() {
  yield all([call(userSaga), call(menuSaga)]);
}
