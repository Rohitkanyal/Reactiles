import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import UserReducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app.js'

const Store = createStore(UserReducers);

ReactDOM.render(
  <Provider store = {Store}>
  <App />
  </Provider>
  ,document.getElementById('container'));
