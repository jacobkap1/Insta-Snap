import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </Provider>
  </React.StrictMode>
);
