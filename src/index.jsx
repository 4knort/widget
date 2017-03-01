import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { App } from 'components';

import 'react-fastclick';
import 'styles';

import store from './store';

const rootElement = document.getElementById('app');

render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
);

