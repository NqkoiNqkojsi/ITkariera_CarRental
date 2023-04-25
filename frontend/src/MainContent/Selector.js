import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import '../Styles/Animations.scss';
import '../Styles/Selector.css';
import '../Styles/Colors.css';
import CustomDay from './Calendar'
import InfoMenu from './Cars/CarInfo';
import CarCard from './Cars/CarCard'
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';

class SelectionMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value1: dayjs(), value2: dayjs(), daysCount:1, validDays:true, isSelectedCar:false, selectedCar:null, cars:[]};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    componentDidMount=()=> {
        this.getAvailableCars();
    }

    getAvailableCars=()=>{
        axios.post('https://localhost:7146/api/Car/CheckAvailability', {
            from: this.state.value1.format('YYYY-MM-DDTHH:mm:ss'),
            to: this.state.value2.format('YYYY-MM-DDTHH:mm:ss'),
            },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            console.log(response);
            this.setState({ cars:response.data.value });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    openObject(car){
        this.props.getDir(car.imgDir)
        this.setState({ selectedCar:car });
        this.setState({isSelectedCar:true});
    }

    closeObject(){
        this.setState({isSelectedCar:false});
        this.getAvailableCars();
    }

    SecondPart(){
        console.log(this.state.isSelectedCar);
        if(this.state.isSelectedCar){
            return(<InfoMenu close={()=>this.closeObject()} car={this.state.selectedCar} day1={this.state.value1.format('YYYY-MM-DDTHH:mm:ss')} day2={this.state.value2.format('YYYY-MM-DDTHH:mm:ss')} days={this.state.daysCount}></InfoMenu>);
        }else{
            return(
                this.state.cars.map((x) => 
                    <Grid item xs={10}>
                        <div onClick={() => this.openObject(x)} className='glow cardCar'>
                            <CarCard car={x}></CarCard>
                        </div>
                    </Grid>
                )
            );
        }
    }

    render(){
        return (
            <Grid container spacing={2} columns={10} sx={{marginBottom:'20px'}}>
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
                                Sum Days: {this.state.daysCount}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sx={{marginTop: 2, marginLeft:4, marginRight:0 }}>
                            <Typography variant="subtitle1" component="div">
                                Legit: {this.state.validDays.toString()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={7} sx={{marginTop: 2, marginLeft:0 }}>
                    <CustomDay value1={this.state.value1} value2={this.state.value2}/>
                </Grid>
                <Divider orientation="horizontal" variant="middle"/>
                {this.SecondPart()}
            </Grid>  
        );
    }

    handleChange1(e) {
        if(e.diff(this.state.value2, 'days')<=0 && e.diff(dayjs(), 'days')>=0){
            this.setState({ daysCount:Math.abs(e.diff(this.state.value2, 'days'))+1});
            this.setState({ value1: dayjs(e) });
            this.setState({validDays:true});
            this.getAvailableCars();
        }else{
            this.setState({validDays:false});
        }
    }

    handleChange2(e) {
        if(e.diff(this.state.value1, 'days')>=0 && e.diff(dayjs(), 'days')>=0){
            this.setState({ daysCount:Math.abs(e.diff(this.state.value1, 'days'))+1});
            this.setState({ value2: dayjs(e) });
            this.setState({validDays:true});
            this.getAvailableCars();
        }else{
            this.setState({validDays:false});
        }
    }
}

export default React.memo(SelectionMenu);
