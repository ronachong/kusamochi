import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './redux/containers.js';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CombinedReducer from './redux/reducers/combined';

const store = createStore(CombinedReducer)

console.log(App);

ReactDOM.render(
  <Provider store={store}>
    <App overlay={store.overlay} />
  </Provider>,
  document.getElementById('root')
);
