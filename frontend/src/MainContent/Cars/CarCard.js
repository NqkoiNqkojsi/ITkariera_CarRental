import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import theme from '../../Styles/Theme';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

class CarCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name: "Toyota Supra Mk4", type:"Sports Car", transmission:"Automatic",price: 52.99, img:"/models/toyota_supra_mk4__supra_1997__free_download/thumbnail.jpg"};
    }

    render(){
            return (
                <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: '#f0f3e8',
                    color: '#042100',
                    borderColor:'#042100'
                }}
                >
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="car" src={"models/"+this.props.car.imgDir+"/thumbnail.jpg"} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {this.props.car.brand+" "+this.props.car.model}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Type: {this.props.car.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Seats: {this.props.car.numberOfSeats}
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Welp
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        ${this.props.car.price} <br/>Per Day
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
            );
    }
}
export default CarCard;
