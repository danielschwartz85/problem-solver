import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app';
import { Provider } from "react-redux";
import store from './store';
import './index.css';
import 'typeface-roboto';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('app'));
