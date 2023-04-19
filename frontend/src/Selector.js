import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import './App.css';
import CustomDay from './Calendar'
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

class SelectionMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: dayjs('2022-04-17')};
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        return (
            <Grid container spacing={2} columns={10}>
                <Grid item xs={4}>
                    <Grid container spacing={2} columns={1}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid item xs={1} sx={{marginTop: 4, marginLeft:4, marginRight:0 }}>
                                <DateField
                                    label="Start Date"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    format="DD-MM-YYYY"
                                />
                            </Grid>
                            <Grid item xs={1} sx={{marginTop: 2, marginLeft:4, marginRight:0 }}>
                                <DateField
                                    label="End Date"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    format="DD-MM-YYYY"
                                />
                            </Grid>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Grid item xs={6} sx={{marginTop: 2, marginLeft:0 }}>
                    <CustomDay/>
                </Grid>
                <Divider></Divider>
            </Grid>  
        );
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
}

export default SelectionMenu;
