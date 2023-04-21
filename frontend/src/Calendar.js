import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

class CustomDateCalendar extends React.Component{
  render(){
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar', 'DateCalendar']}>
          <DemoItem>
            <DateCalendar defaultValue={dayjs()} readOnly />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    );
  }
}

export default CustomDateCalendar;
