import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { GlobalStyle } from './app/styles/global';

import "react-image-gallery/styles/css/image-gallery.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
