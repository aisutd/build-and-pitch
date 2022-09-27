import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "@fontsource/fira-code";
import aisLogo from  ".././images/Black.png";  

const pages = ["About", "Schedule", "FAQ", "Contact Us"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (value) => {
    console.log(value);
  };

  return (
    <AppBar sx={{backgroundColor: "black", width: "100vw"}} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={aisLogo} width={150}/>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'fira code',
              fontWeight: 400,
            }}
          >
            Artificial Intelligence Society
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}/>

          <Box sx={{ flexGrow: 0, display: {xs: "none", md: "flex"} }}>
              <Button onClick={() => window.scrollTo({top: 550, behavior: "smooth"})} sx={{ mr: 2, my: 2, color: 'white', display: 'block' }}>
                <Typography variant="h6" textTransform={"none"} sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'fira code', fontWeight: 400,}}
                >
                  About
                </Typography>
              </Button>
              <Button onClick={() => window.scrollTo({top: 2050, behavior: "smooth"})} sx={{mr: 2, my: 2, color: 'white', display: 'block' }}>
                <Typography variant="h6" textTransform={"none"} sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'fira code', fontWeight: 400,}}
                >
                  Schedule
                </Typography>
              </Button>
              <Button onClick={() => window.scrollTo({top: 3050, behavior: "smooth"})} sx={{mr: 2, my: 2, color: 'white', display: 'block' }}>
                <Typography variant="h6" textTransform={"none"} sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'fira code', fontWeight: 400,}}
                >
                  FAQ
                </Typography>
              </Button>
              <Button onClick={() => window.scrollTo({top: 4700, behavior: "smooth"})} sx={{my: 2, color: 'white', display: 'block' }}>
                <Typography variant="h6" textTransform={"none"} sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'fira code', fontWeight: 400,}}
                >
                  Contact Us
                </Typography>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
