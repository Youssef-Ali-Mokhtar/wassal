import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function TemporaryDrawer({drawer, drawerHandler, t}:any) {

  const toggleDrawer = () =>{
      drawerHandler();
    };

  const list = (
    <Box
      sx={{ width: '100vw', height:'100vh', display:'flex', justifyContent:'center', alignContent:'center'}}
      role="presentation"
      onClick={()=>toggleDrawer()}
      onKeyDown={()=>toggleDrawer()}
    >
      <List sx={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%'}}>
        {['TrackShipment','Products','Pricing'].map((text) => (
        <Link to={`/${text}`} key={text}>
            <ListItem  disablePadding >
                <ListItemButton >
                        <ListItemText  
                                primary={<Typography 
                                        style={{ fontSize:'1.5rem' }}>
                                        {t(text)}
                                </Typography>} 
                                sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                                />
                </ListItemButton>
            </ListItem>
        </Link>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
          <Drawer
            open={drawer}
            onClose={()=>toggleDrawer()}
          >
            {list}
          </Drawer>

    </div>
  );
}
