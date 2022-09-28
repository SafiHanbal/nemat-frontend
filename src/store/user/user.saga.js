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
  forgotPasswordSucess,
  forgotPasswordFailed,
  resetPasswordSuccess,
  resetPasswordFailed,
} from './user.action';

function* loginUser({ payload: { phone, password } }) {
  try {
    const data = yield call(
      fetchData,
      'api/v1/user/login',
      REQ_METHOD_TYPES.post,
      {
        phone,
        password,
      }
    );

    if (data.status === 'fail') throw new Error(data.message);
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

    if (data.status === 'fail') throw new Error(data.message);
    const { user } = data.data;
    yield put(setCurrentUser(user));
    yield put(signUpSuccess());
  } catch (err) {
    yield put(signUpFailed(err));
  }
}

function* forgotPassword({ payload: { phone } }) {
  try {
    const data = yield call(
      fetchData,
      'api/v1/user/forgot-password',
      REQ_METHOD_TYPES.post,
      { phone }
    );

    if (data.status === 'fail') throw new Error(data.message);
    yield put(forgotPasswordSucess());
  } catch (err) {
    yield put(forgotPasswordFailed(err));
  }
}

function* resetPassword({ payload: { otp, password, passwordConfirm } }) {
  try {
    const data = yield call(
      fetchData,
      'api/v1/user/reset-password',
      REQ_METHOD_TYPES.post,
      { otp, password, passwordConfirm }
    );

    if (data.status === 'fail') throw new Error(data.message);
    const { user } = data.data;
    yield put(setCurrentUser(user));
    yield put(resetPasswordSuccess());
  } catch (err) {
    yield put(resetPasswordFailed(err));
  }
}

function* onLoginStart() {
  yield takeLatest(USER_ACTION_TYPES.LOGIN_USER_START, loginUser);
}

function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_USER_START, signUpUser);
}

function* onForgotPasswordStart() {
  yield takeLatest(USER_ACTION_TYPES.FORGOT_PASSWORD_START, forgotPassword);
}

function* onResetPasswordStart() {
  yield takeLatest(USER_ACTION_TYPES.RESET_PASSWORD_START, resetPassword);
}

export function* userSaga() {
  yield all([
    call(onLoginStart),
    call(onSignUpStart),
    call(onForgotPasswordStart),
    call(onResetPasswordStart),
  ]);
}
