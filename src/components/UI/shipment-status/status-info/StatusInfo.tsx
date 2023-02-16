import {Box} from '@mui/material';
import StatusInfoRow from './StatusInfoRow';
import {extractDate, extractTime, extractWeekDay} from "../../../util/DateHelper"
const StatusInfo = ({data, t}:any) => {

    let lastUpdate = `${t(extractWeekDay(data["CurrentStatus"].timestamp))}
                      ${extractDate(data["CurrentStatus"].timestamp)}
                      ${extractTime(data["CurrentStatus"].timestamp)}`;

    let deliveryDate = extractDate(data["PromisedDate"]);

    let upperData = [`${t("ShipmentNumberTitle")} ${data["TrackingNumber"]}`,
                     `${t("LastUpdateTitle")}`,
                     `${t("DateOfDeliveryTitle")}`];

    let lowerData = [t(data["CurrentStatus"].state),
                     lastUpdate,
                     deliveryDate];

    return ( <Box sx={{display:'flex',
                       flexDirection:'column', 
                       width:'100%', 
                       height:'fit-content',
                       margin:'5px 0px'
                       }}>

                <StatusInfoRow data={upperData} color={'rgb(166, 166, 166)'}/>
                <StatusInfoRow data={lowerData} color={'rgb(33, 42, 39)'}/>
            </Box> );
}
 
export default StatusInfo;