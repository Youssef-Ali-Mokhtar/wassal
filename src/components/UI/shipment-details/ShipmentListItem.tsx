import {Box} from '@mui/material';
import ListItem from '@mui/material/ListItem';

const ShipmentListItem = ({date, time, details, detailsColor}: any) => {

    return (
        <ListItem sx={{color: detailsColor}}>
            <Box sx={{width:'100%',display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <Box sx={{flex:'2',textAlign:'center'}}>{date}</Box>
                <Box sx={{flex:'2',textAlign:'center'}}>{time}</Box>
                <Box sx={{flex:'2',textAlign:'center'}}>{details}</Box>
            </Box>
    </ListItem>
     );
}
 
export default ShipmentListItem;