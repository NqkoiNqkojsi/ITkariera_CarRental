import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

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
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                >
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="car" src={this.state.img} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {this.state.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Type: {this.state.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Transmission: {this.state.transmission}
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        ${this.state.price} <br/>Per Day
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
            );
    }
}
export default CarCard;
