import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResponsiveAppBar from './modules/appbar';
import Head from './modules/homepage/head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ResponsiveAppBar/>
    <Head/>
  </div>
);