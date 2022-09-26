import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResponsiveAppBar from './modules/appbar';
import About from './modules/homepage/about';
import Head from './modules/homepage/head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ResponsiveAppBar/>
    <div style={{height: "500px"}}>
      <Head/>
    </div>
    <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 10, borderBottomWidth: 5, textAlign: "center",}}/>
    <Box mb={18}/>
    <About/>
    <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 10, borderBottomWidth: 5, textAlign: "center",}}/>
  </div>
);