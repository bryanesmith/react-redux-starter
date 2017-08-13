/*eslint-disable no-unused-vars*/
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
/*eslint-enable no-unused-vars*/

// lib
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// custom
import reducers from './reducers';

// assets
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, root);
