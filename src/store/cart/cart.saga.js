import { all, call, takeLatest, put } from 'redux-saga/effects';
import { CART_ACTION_TYPES } from './cart.types';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { REQ_METHOD_TYPES } from '../../utils/fetch-data/req-types';

import {
  addToCartSuccess,
  removeFromCartSuccess,
  codOrderSuccess,
  codOrderFailed,
  cardOrderSuccess,
  cardOrderFailed,
  setOrderConfirmed,
  getUserOrderSuccess,
  getUserOrderFailed,
} from './cart.action';

const calcCartCount = (newCartItems) => {
  return newCartItems.reduce((acc, item) => acc + item.quantity, 0);
};

const calcCartTotal = (newCartItems) => {
  return newCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};

function* addToCart({ payload: { cartItems, itemToAdd } }) {
  const isAlreadyIncluded = cartItems.some((item) => item.id === itemToAdd.id);

  if (!isAlreadyIncluded) {
    const newCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
    const newCartCount = calcCartCount(newCartItems);
    const newCartTotal = calcCartTotal(newCartItems);

    yield put(
      addToCartSuccess({
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  } else {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemToAdd.id) {
        return { ...itemToAdd, quantity: item.quantity + 1 };
      }
      return item;
    });
    const newCartCount = calcCartCount(newCartItems);
    const newCartTotal = calcCartTotal(newCartItems);

    yield put(
      addToCartSuccess({
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  }
}

function* removeFromCart({ payload: { cartItems, itemToRemove } }) {
  const newCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
  const newCartCount = calcCartCount(newCartItems);
  const newCartTotal = calcCartTotal(newCartItems);

  yield put(
    removeFromCartSuccess({
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    })
  );
}

function* codOrderStart({ payload }) {
  try {
    const cartItemsModified = payload.map((item) => ({
      menuItem: item.id,
      quantity: item.quantity,
    }));

    const data = yield call(fetchData, 'api/v1/order', REQ_METHOD_TYPES.post, {
      paymentMethod: 'cash-on-delivery',
      menuItems: cartItemsModified,
    });

    console.log(data);
    if (data.status === 'fail' || data.status === 'error')
      throw new Error(data.message);

    yield put(setOrderConfirmed(true));
    yield put(codOrderSuccess());
  } catch (err) {
    yield put(codOrderFailed(err));
  }
}

function* cardOrder({ payload }) {
  try {
    console.log(payload);
    const cartItemsModified = payload.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    console.log(cartItemsModified);
    const data = yield call(
      fetchData,
      'api/v1/order/checkout-session',
      REQ_METHOD_TYPES.post,
      { menuItems: cartItemsModified }
    );
    console.log(data);
  } catch (err) {
    yield put(cardOrderFailed(err));
  }
}

function* getUserOrder({ payload }) {
  try {
    const data = yield call(
      fetchData,
      `api/v1/order?user=${payload}&sort=-orderedAt`
    );

    if (data.status !== 'success') throw new Error(data.message);
    const { orders } = data.data;
    yield put(getUserOrderSuccess(orders));
  } catch (err) {
    yield put(getUserOrderFailed(err));
  }
}

function* onAddToCartStart() {
  yield takeLatest(CART_ACTION_TYPES.ADD_TO_CART_START, addToCart);
}

function* onRemoveFromCartStart() {
  yield takeLatest(CART_ACTION_TYPES.REMOVE_FROM_CART_START, removeFromCart);
}

function* onCodOrderStart() {
  yield takeLatest(CART_ACTION_TYPES.COD_ORDER_START, codOrderStart);
}

function* onCardOrderStart() {
  yield takeLatest(CART_ACTION_TYPES.CARD_ORDER_START, cardOrder);
}

function* onGetUserOrderStart() {
  yield takeLatest(CART_ACTION_TYPES.GET_USER_ORDER_START, getUserOrder);
}

export function* cartSaga() {
  yield all([
    call(onAddToCartStart),
    call(onRemoveFromCartStart),
    call(onCodOrderStart),
    call(onCardOrderStart),
    call(onGetUserOrderStart),
  ]);
}
