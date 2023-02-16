import {Box, Typography} from '@mui/material';
import ShipmentInfo from '../UI/ShipmentInfo';
import useFetch from '../util/useFetch';
import ShipmentSearch from '../UI/ShipmentSearch';
import { useState } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const TrackShipment = ({t}:any) => {

    const [search, setSearch] = useState('');

    const {data, pending, error} = useFetch(search, t);

    return (<Box sx={{height:'fit-content', 
                      width:'100%', 
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'center',
                      paddingTop:'20px'}}>
        
        <ShipmentSearch t={t} search={search} searchHandler={setSearch}/>
        
        {error && <Box>{error}</Box>}
        {pending && <Box>Loading...</Box>}
        {data && <ShipmentInfo t={t} data={data}/>}
        {(!data && !pending && !error)&& <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', width:'100%'}}>
            <LocalShippingIcon sx={{color:'rgb(25,118,210)', fontSize:'200px'}}/>
            <Typography sx={{fontSize:'36px', color:'rgb(25,118,210)'}}>{t("InsertShipmentNumber")}</Typography>
            </Box>}
        </Box>);
}

export default TrackShipment;