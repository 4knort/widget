import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'modules';

const routingMiddleware = routerMiddleware(hashHistory);

const middlewares = [
  thunkMiddleware,
  routingMiddleware,
];

  const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;
