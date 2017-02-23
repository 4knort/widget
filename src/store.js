import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { throttle } from 'lodash';
import rootReducer from 'modules';

const routingMiddleware = routerMiddleware(hashHistory);

const middlewares = [
  thunkMiddleware,
  routingMiddleware,
];

const configureStore = (initialState) => {
  // Prevent redux devTools initialization in production
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension()
      : f => f
  ));

  return store;
};

export default configureStore;
