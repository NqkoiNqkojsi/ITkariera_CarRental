import React from 'react';
import Box from '@mui/material/Box';
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
            <Grid container spacing={2} columns={2}>
                <Grid item xs={1}>
                    <Grid container spacing={2} columns={1}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid item xs={1} sx={{marginTop: 4, marginLeft:4 }}>
                                <DateField
                                    label="Start Date"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    format="DD-MM-YYYY"
                                />
                            </Grid>
                            <Grid item xs={1} sx={{marginTop: 2, marginLeft:4 }}>
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
                <Grid item xs={1}>
                    <CustomDay/>
                </Grid>
            </Grid>
        );
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
}

export default SelectionMenu;
