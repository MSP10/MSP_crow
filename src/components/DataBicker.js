import * as React from 'react';
import TextField from '@mui/material/TextField';
import Luxon from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={Luxon}>
     
        <MobileDatePicker
          label="Year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    
    </LocalizationProvider>
  );
}
