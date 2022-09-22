import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger];

const enhancedMiddlewares = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, enhancedMiddlewares);
