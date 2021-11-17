import { createStore, applyMiddleware } from 'redux';

// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

// const middleware = [logger, thunk];
const middleware = [thunk];

export const store = createStore(reducer, applyMiddleware(...middleware));
