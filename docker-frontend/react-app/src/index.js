import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './redux/containers.js';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './redux/reducers/all';

const store = createStore(Reducers)

console.log(App);

ReactDOM.render(
  <Provider store={store}>
    <App modal={store.modal} />
  </Provider>,
  document.getElementById('root')
);
