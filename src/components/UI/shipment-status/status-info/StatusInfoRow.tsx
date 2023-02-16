import {Box} from '@mui/material';
import StatusInfoRowItem from './StatusInfoRowItem';
const StatusInfoRow = ({data, color}: any) => {
    return (<Box sx={{display:'flex', justifyContent:'space-around', alignContent:'center'}}>
                {data.map((item:any, index:number)=>{
                    return <StatusInfoRowItem key={index} data={item} color={color}/>
                })}
            </Box>);
}
 
export default StatusInfoRow;