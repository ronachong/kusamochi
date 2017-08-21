import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import { Provider } from 'react-redux';
import CombinedReducer from './redux/reducers/combined';

const Store = createStore(CombinedReducer)

ReactDOM.render(
  <App overlay={Store.overlay} />,
  document.getElementById('root')
);
