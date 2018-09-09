import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  /* eslint-disable react/jsx-filename-extension */
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root'),
);
