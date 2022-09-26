import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResponsiveAppBar from './modules/appbar';
import About from './modules/homepage/about';
import BottomBar from './modules/homepage/bottombar';
import Faq from './modules/homepage/faq';
import Head from './modules/homepage/head';
import Schedule from './modules/homepage/schedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{overflowX: "hidden", overflowY: "hidden"}}>
    <ResponsiveAppBar/>
    <div style={{height: "500px"}}>
      <Head/>
    </div>
    <Divider variant="middle" sx={{bgcolor: "#00B9FF", borderBottomWidth: 5, textAlign: "center",}}/>
    <Box mb={18}/>
    <About/>
    <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 20, mb:15, borderBottomWidth: 5, textAlign: "center",}}/>
    <Schedule/>
    <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 20, mb:15, borderBottomWidth: 5, textAlign: "center",}}/>
    <Faq/>
    <Divider sx={{bgcolor: "#00B9FF", mt:10, borderBottomWidth: 5, width: "100vw"}}/>
    <BottomBar/>
  </div>
);