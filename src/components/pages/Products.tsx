import {Box} from '@mui/material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const Products = () => {
    return (<Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'80vh'}}>
        <ProductionQuantityLimitsIcon sx={{color:'rgb(25,118,210)', fontSize:'200px'}}/>
    </Box>);
}
 
export default Products;