import {Box} from '@mui/material';
const StatusInfoRowItem = ({data, color}:any) => {
    return (<Box sx={{color:`${color}`,paddingTop:'3px',flex:'1', display:'flex', alignItems:'center', justifyContent:'center'}}>
                {data}
            </Box>);
}

export default StatusInfoRowItem;