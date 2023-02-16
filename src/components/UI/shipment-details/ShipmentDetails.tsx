import {Box, Divider} from '@mui/material';
import List from '@mui/material/List';
import { Fragment } from 'react';
import ShipmentListItem from './ShipmentListItem';
import {extractDate, extractTime} from "../../util/DateHelper"

const ShipmentDetails = ({data, t}:any) => {
    return (<Box sx={{borderRadius:'5px', border:'1px solid lightgrey'}}>
                <List sx={{fontSize:'11px'}}>
                    <ShipmentListItem 
                        date={t("Date")} 
                        time={t("Time")} 
                        details={t("Details")}
                        detailsColor={'rgb(143, 155, 178)'}
                        />
                    {data.map((text:any, index:number) => (
                    <Fragment key={index}>
                        <Divider/>
                        <ShipmentListItem 
                            date={extractDate(text.timestamp)} 
                            time={extractTime(text.timestamp)} 
                            details={t(text.state)}
                            detailsColor={'rgb(25, 34, 62)'}
                            />
                    </Fragment>
                    ))}
                </List>
            </Box> );
}
 
export default ShipmentDetails;