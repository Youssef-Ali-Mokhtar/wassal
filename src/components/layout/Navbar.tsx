import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from "react-router-dom";

const pages = ['TrackShipment', 'Products', 'Pricing'];

function ResponsiveAppBar({drawerHandler, t, i18n}:any) {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

            {/* Logo full width */}
                <LocalShippingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href='/'
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {t('title')}
                    </Typography>

            {/* Links mobile width */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>drawerHandler()}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          {/* Logo mobile width */}
          <LocalShippingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('title')}
          </Typography>

            <Box>
              {i18n.language=='en'&&<Button 
                variant="outlined" 
                sx={{color:'white', 
                     borderColor:'white'
                    }}
                    onClick={()=>{
                      i18n.changeLanguage('ar');
                      localStorage.setItem("lang",'ar');
                    }}
              >
                AR
              </Button>}
              {i18n.language=='ar'&&<Button
                variant="outlined" 
                sx={{color:'white', 
                     borderColor:'white'
                    }}
                    onClick={()=>{
                      i18n.changeLanguage('en');
                      localStorage.setItem("lang",'en');
                    }}
              >
                EN
              </Button>}
            </Box>
              

            {/* links full width */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'end' } }}>
            {pages.map((page) => (
                <Link to={`/${page}`}
                key={page}
                className='nav-link'
              >
                {t(`${page}`)}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
