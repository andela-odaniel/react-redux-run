// Notice: large size, some features in ES6 which babel can't transpile 
import 'babel-polyfill';
import React from 'react';
// react-dom use in web development
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// browserHistory for modern broswer who supports HTML5
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadTowns } from './actions/townsActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// I set initialState in reducer
// if using server-side render or localStorage, you may want pass initialState here
const store = configureStore();
store.dispatch(loadTowns());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')  
);
