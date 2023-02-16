import {Box, Divider} from '@mui/material';
import StatusProgress from './StatusProgress';
import StatusInfo from './status-info/StatusInfo';



const ShipmentStatus = ({data, t, lastState}:any) => {

    return (<Box sx={{width:'100%', 
                      height:'fit-content', 
                      borderRadius:'5px', 
                      border:'2px solid rgb(241, 241, 241)', 
                      marginBottom:'20px', 
                      display:'flex', 
                      flexDirection:'column'}}>

                    <StatusInfo t={t} data={data}/>
                    <Divider/>
                    <StatusProgress lastState={lastState} t={t}/>
                    
            </Box> );
}
 
export default ShipmentStatus;