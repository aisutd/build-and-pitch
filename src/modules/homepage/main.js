import { Box, Divider } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../appbar';
import About from './about';
import BottomBar from './bottombar';
import Faq from './faq';
import Head from './head';
import Schedule from './schedule';

export default function MainFile() {

    return (
    <div style={{overflowX: "hidden", overflowY: "hidden"}}>
        <ResponsiveAppBar />
        <Box mb={10}/>
        <div style={{height: "500px"}}>
            <Head/>
        </div>
        <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 20, mb:15, borderBottomWidth: 5, textAlign: "center",}}/>
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
}