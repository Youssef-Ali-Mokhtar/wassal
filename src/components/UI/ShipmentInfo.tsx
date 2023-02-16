import {Box} from '@mui/material';
import ShipmentStatus from './shipment-status/ShipmentStatus';
import ShipmentDetails from './shipment-details/ShipmentDetails';

const ShipmentInfo = ({data, t}:any) => {
    let lastState = data["TransitEvents"][data["TransitEvents"].length-1].state;
    return ( <Box sx={{width:'90vw', height:'fit-content', paddingBottom:'20px'}}>
            <ShipmentStatus t={t} data={data} lastState={lastState}/>
            <Box sx={{display:'flex', justifyContent:'center', padding:'5px 0px', color:'rgb(25, 34, 62)'}}>{t("ShipmentDetailsTitle")}</Box>
            <ShipmentDetails t={t} data={data["TransitEvents"]}/>
    </Box> );
}

export default ShipmentInfo;