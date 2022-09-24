import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean);

const composedMiddlewares = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedMiddlewares);

sagaMiddleware.run(rootSaga);
