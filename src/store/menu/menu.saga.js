import { all, call, takeLatest, put } from 'redux-saga/effects';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { REQ_METHOD_TYPES } from '../../utils/fetch-data/req-types';

import { MENU_ACTION_TYPES } from './menu.types';
import {
  fetchMenuSuccess,
  fetchMenuFailed,
  changeDisplayItems,
  fetchMenuItemSuccess,
  fetchMenuItemFailed,
  postReviewSuccess,
  postReviewFailed,
} from './menu.action';

function* fetchMenuAsync({ payload: { category } }) {
  try {
    const data = yield call(
      fetchData,
      `api/v1/menu?category=${category}`,
      REQ_METHOD_TYPES.get
    );
    const { menu } = data.data;
    yield put(fetchMenuSuccess({ [category]: menu }));
    yield put(changeDisplayItems({ displayItems: menu }));
  } catch (err) {
    yield put(fetchMenuFailed(err));
  }
}

function* fetchMenuItemAsync({ payload }) {
  try {
    const data = yield call(
      fetchData,
      `api/v1/menu/${payload}`,
      REQ_METHOD_TYPES.get
    );

    const { menuItem } = data.data;
    yield put(fetchMenuItemSuccess(menuItem));
  } catch (err) {
    yield put(fetchMenuItemFailed(err));
  }
}

function* postReview({ payload: { menuItemId, review } }) {
  try {
    const data = yield call(
      fetchData,
      `api/v1/menu/${menuItemId}/review`,
      REQ_METHOD_TYPES.post,
      review
    );
    if (data.status === 'fail' || data.status === 'error')
      throw new Error(data.message);

    yield put(postReviewSuccess());
  } catch (err) {
    yield put(postReviewFailed(err));
  }
}

function* onFetchMenuStart() {
  yield takeLatest(MENU_ACTION_TYPES.FETCH_MENU_ITEMS_START, fetchMenuAsync);
}

function* onFetchMenuItemStart() {
  yield takeLatest(MENU_ACTION_TYPES.FETCH_MENU_ITEM_START, fetchMenuItemAsync);
}

function* onPostReviewStart() {
  yield takeLatest(MENU_ACTION_TYPES.POST_REVIEW_START, postReview);
}

export function* menuSaga() {
  yield all([
    call(onFetchMenuStart),
    call(onFetchMenuItemStart),
    call(onPostReviewStart),
  ]);
}
