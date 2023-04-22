import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import './Animations.scss';
import './Info.css';
import CustomDay from './Calendar'
import CarCard from './CarCard'
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

class InfoMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { brand: "Toyota", model:"Supra Mk4", type:"Sports Car", year:"1999", space:"5",price: 52.99, dir:"/models/toyota_supra_mk4__supra_1997__free_download/"};
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
                            <button className="ghost glow" id="Rent">Rent</button> 
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