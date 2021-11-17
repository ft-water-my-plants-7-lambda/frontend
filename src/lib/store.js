import { createStore, applyMiddleware } from 'redux';

// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

// const middleware = process.env.NODE_ENV !== 'production' ? [logger, thunk] : [thunk];
const middleware = [thunk];

export const store = createStore(reducer, applyMiddleware(...middleware));
