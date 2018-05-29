import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("content");

  const store = configureStore();

  // TODO: REMOVE later
  window.store = store;

  ReactDOM.render(<Root store = {store} />, rootEl);
});
