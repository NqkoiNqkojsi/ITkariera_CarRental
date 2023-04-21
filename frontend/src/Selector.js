import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import './App.css';
import CustomDateCalendar from './Calendar'
import CarCard from './CarCard'
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

class SelectionMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value1: dayjs(), value2: dayjs(), daysCount:1};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    render(){
        return (
            <Grid container spacing={2} columns={10}>
                <Grid item xs={3}>
                    <Grid container spacing={2} columns={1}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid item xs={1} sx={{marginTop: 5, marginLeft:4, marginRight:0 }}>
                                <DateField
                                    label="Start Date"
                                    value={this.state.value1}
                                    onChange={this.handleChange1}
                                    format="DD-MM-YYYY"
                                    disablePast={true}
                                    maxDate={dayjs("12/12/2023")}
                                />
                            </Grid>
                            <Grid item xs={1} sx={{marginTop: 2, marginLeft:4, marginRight:0 }}>
                                <DateField
                                    label="End Date"
                                    value={this.state.value2}
                                    onChange={this.handleChange2}
                                    format="DD-MM-YYYY"
                                    disablePast={true}
                                    maxDate={dayjs("12/12/2023")}
                                />
                            </Grid>
                        </LocalizationProvider>
                        <Grid item xs={1} sx={{marginTop: 2, marginLeft:4, marginRight:0 }}>
                            <Typography variant="subtitle1" component="div">
                                Sum Days:{this.state.daysCount}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={7} sx={{marginTop: 2, marginLeft:0 }}>
                    <CustomDateCalendar/>
                </Grid>
                <Divider></Divider>
                <Grid item xs={10}>
                    <CarCard></CarCard>
                </Grid>
                <Grid item xs={10}>
                    <CarCard></CarCard>
                </Grid>
                <Grid item xs={10}>
                    <CarCard></CarCard>
                </Grid>
            </Grid>  
        );
    }

    handleChange1(e) {
        this.setState({ daysCount:Math.abs(e.diff(this.state.value2, 'days'))});
        this.setState({ value1: e.toDate() });
        if(e.isAfter(this.state.value2)){
            
        }else{

        }
    }

    handleChange2(e) {
        this.setState({ daysCount:Math.abs(e.diff(this.state.value1, 'days'))});
        this.setState({ value2: e.toDate() });
        if(e.isBefore(this.state.value1)){

        }else{
            
        }
    }
}

export default SelectionMenu;
