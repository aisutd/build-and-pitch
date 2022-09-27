import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar, Button, ButtonBase, Grid, IconButton, SvgIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { Icon } from '@iconify/react';

export default function BottomBar() {
    const [value, setValue] = React.useState(0);
  
    return (
        <Grid container width = "100%" height="200px" alignItems="center" justifyContent="space-around" sx={{ backgroundColor: "black" }}>
          <Grid item>
            <IconButton onClick={() => window.open('https://www.instagram.com/utdais/', '_blank')}  sx={{color: "white", }}>
              <InstagramIcon sx={{fontSize: "80px"}}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => window.open('https://discord.gg/tEfAAHpFAX', '_blank')} sx={{color: "white", }}>
              <Icon fontSize="80px" icon="akar-icons:discord-fill" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => window.open('https://www.linkedin.com/company/ais-utd/', '_blank')}  sx={{color: "white", }}>
              <LinkedInIcon sx={{fontSize: "80px"}}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => window.open('https://www.aisutd.org/', '_blank')}  sx={{color: "white", }}>
              <LaptopMacIcon sx={{fontSize: "80px"}}/>
            </IconButton>
          </Grid>
        </Grid>
    );
  }