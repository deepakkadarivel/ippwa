import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import app from './rootReducer';

export default () => {
  let middleware = applyMiddleware(thunk);
  if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-line
    middleware = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  }

  return createStore(app, middleware);
};
