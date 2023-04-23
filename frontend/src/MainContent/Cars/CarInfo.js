import React from 'react';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import '../../Styles/Animations.scss';
import '../../Styles/Info.css';
import CustomDay from '../Calendar'
import CarCard from './CarCard'
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import axios from 'axios';

class InfoMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open:false, brand: "Toyota", model:"Supra Mk4", type:"Sports Car", year:"1999", space:"5",price: 52.99, dir:"/models/toyota_supra_mk4__supra_1997__free_download/"};
    }
    handleOpen(){
        this.setState({open:true});
    };
    
    handleClose(){
        this.setState({open:false});
    };

    getCookie(key){
        let b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
        return b;
    }

    rentCar=()=>{
        let userID=this.getCookie('id');
        if(userID==null){
            return(
            <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="error" sx={{ width: '100%' }}>
                  You have to be logged in!
                </Alert>
            </Snackbar>
            );
        }else{
            axios.post('https://localhost:7146/api/Car/CreateQuery', {
            from: this.props.day1,
            to: this.props.day2,
            carID:this.props.car.id,
            userID:userID[2]
            },{
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then((response)=> {
                console.log(response);
                this.props.close()
            })
            .catch(function (error) {
                //console.log(this.props.day1);
                console.log(error);
            });
        }
    }

    render(){
        return (
            <figure className="product-card">
                <div className='containerImg'>
                    <img className="product-card-img" src={"/models/"+this.props.car.imgDir+"/thumbnail.jpg"} alt={this.props.car.model}/>
                    <button onClick={()=>this.props.close()} className="previous round">&#8249;</button>
                </div>
                <figcaption>
                    <h1 className="product-card-title">{this.props.car.brand} {this.props.car.model}</h1>
                    <Grid container spacing={2} columns={10}>
                        <Grid item xs={5}>
                            <h3>Year: {this.props.car.year}</h3>
                            <h3 className="product-card-address">
                                Space: {this.props.car.numberOfSeats}
                            </h3>
                            <button className="ghost glow" id="Rent" onClick={()=>this.rentCar()}>Rent</button> 
                        </Grid>
                        <Grid item xs={5}>
                            <p className="original-price">${this.props.car.price}/day</p>
                            <p className="amount-price">
                            <span className="from">all in:</span>
                            ${this.props.car.price*this.props.days}<span className="from"></span>
                            </p>
                        </Grid>
                    </Grid>
                </figcaption>
            </figure>
        );
    }

}

export default InfoMenu;