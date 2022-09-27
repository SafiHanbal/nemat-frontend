import { all, call, takeLatest, put } from 'redux-saga/effects';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { REQ_METHOD_TYPES } from '../../utils/fetch-data/req-types';

import { MENU_ACTION_TYPES } from './menu.types';
import {
  fetchMenuSuccess,
  fetchMenuFailed,
  changeDisplayItems,
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

function* onFetchMenuStart() {
  yield takeLatest(MENU_ACTION_TYPES.FETCH_MENU_ITEMS_START, fetchMenuAsync);
}

export function* menuSaga() {
  yield all([call(onFetchMenuStart)]);
}
