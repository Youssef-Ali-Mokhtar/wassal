import {Box, Typography} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';

const Home = ({t}:any) => {
    return (<Box sx={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', width:'100%', height:'80vh'}}>
        <Link to="/TrackShipment">
            <LocalShippingIcon sx={{color:'red', fontSize:'200px'}}/>
            <Typography sx={{fontSize:'36px', color:'red'}}>{t("TrackShipment")}</Typography>
        </Link>

    </Box>);
}
 
export default Home;