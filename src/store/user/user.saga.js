import { all, call, takeLatest, put } from 'redux-saga/effects';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { REQ_METHOD_TYPES } from '../../utils/fetch-data/req-types';

import { USER_ACTION_TYPES } from './user.types';
import {
  setCurrentUser,
  loginSuccess,
  loginFailed,
  signUpSuccess,
  signUpFailed,
} from './user.action';

function* loginUser({ payload: { phone, password } }) {
  try {
    const endpoint = 'api/v1/user/login';
    const data = yield call(fetchData, endpoint, REQ_METHOD_TYPES.post, {
      phone,
      password,
    });

    const { user } = data.data;
    yield put(setCurrentUser(user));
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailed(err));
  }
}

function* signUpUser({ payload }) {
  try {
    const {
      name,
      phone,
      house,
      area,
      city,
      pinCode,
      password,
      passwordConfirm,
    } = payload;

    const data = yield call(
      fetchData,
      'api/v1/user/signup',
      REQ_METHOD_TYPES.post,
      {
        name,
        phone,
        address: {
          house,
          area,
          city,
          pinCode,
        },
        password,
        passwordConfirm,
      }
    );

    const { user } = data.data;
    yield put(setCurrentUser(user));
    yield put(signUpSuccess());
  } catch (err) {
    yield put(signUpFailed(err));
  }
}

function* onLoginStart() {
  yield takeLatest(USER_ACTION_TYPES.LOGIN_USER_START, loginUser);
}

function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_USER_START, signUpUser);
}

export function* userSaga() {
  yield all([call(onLoginStart), call(onSignUpStart)]);
}
