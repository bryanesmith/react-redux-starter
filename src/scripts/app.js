/*eslint-disable no-unused-vars*/
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
/*eslint-enable no-unused-vars*/

// lib
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// custom
import rootReducer from './reducers';

// assets
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root');
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root);
