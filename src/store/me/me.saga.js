import { all, call, takeLatest, put } from 'redux-saga/effects';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { REQ_METHOD_TYPES } from '../../utils/fetch-data/req-types';

import { ME_ACTION_TYPES } from './me.types';
import {
  updateMeSucess,
  updateMeFailed,
  updatePasswordSuccess,
  updatePasswordFailed,
  logoutSucess,
  logoutFailed,
} from './me.action';
import { setCurrentUser, setToken } from '../user/user.action';

function* updateMe({ payload }) {
  try {
    const data = yield call(
      fetchData,
      'api/v1/user/update-me',
      REQ_METHOD_TYPES.patch,
      payload,
      false
    );
    if (data.status === 'fail' || data.status === 'error')
      throw new Error(data.message);
    const { user } = data.data;
    yield put(setCurrentUser(user));
    yield put(updateMeSucess());
  } catch (err) {
    yield put(updateMeFailed(err));
  }
}

function* updatePassword({ payload }) {
  try {
    const data = yield call(
      fetchData,
      'api/v1/user/update-my-password',
      REQ_METHOD_TYPES.post,
      payload
    );

    if (data.status === 'fail' || data.status === 'error')
      throw new Error(data.message);
    const { user } = data.data;
    const { token } = data.data;

    yield put(setToken(token));
    yield put(updatePasswordSuccess());
    yield put(setCurrentUser(user));
  } catch (err) {
    yield put(updatePasswordFailed(err));
  }
}

function* logoutUser() {
  try {
    const data = yield call(fetchData, 'api/v1/user/logout');

    if (data.status === 'fail' || data.status === 'error')
      throw new Error(data.message);

    yield put(setToken(null));
    yield put(setCurrentUser(null));
    yield put(logoutSucess());
  } catch (err) {
    yield put(logoutFailed(err));
  }
}

function* onUpdateMeStart() {
  yield takeLatest(ME_ACTION_TYPES.UPDATE_ME_START, updateMe);
}

function* onUpdatePasswordStart() {
  yield takeLatest(ME_ACTION_TYPES.UPDATE_PASSWORD_START, updatePassword);
}

function* onLogoutStart() {
  yield takeLatest(ME_ACTION_TYPES.LOGOUT_START, logoutUser);
}

export function* meSaga() {
  yield all([
    call(onUpdateMeStart),
    call(onUpdatePasswordStart),
    call(onLogoutStart),
  ]);
}
