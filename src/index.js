import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainFile from './modules/homepage/main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MainFile />
  </React.StrictMode>
);