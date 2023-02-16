import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
const ShipmentSearch = ({t, searchHandler}:any)=>{
    const [id, setId] = useState('');
  return (
    <Paper
      onSubmit={(e)=>{
        e.preventDefault();
        searchHandler(id);
      }}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: 200, marginBottom:'20px' }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={t("ShipmentNumberTitle")}
        onChange={(event)=>{
            setId(event.target.value)
        }}
        value={id}
      />

    </Paper>
  );
}

export default ShipmentSearch;
