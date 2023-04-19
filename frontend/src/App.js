import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionMenu from './Selector'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

class App extends React.Component{
  render(){
    return (
      <Grid container spacing={2} columns={20}>
        <Grid item xs={7}>
          <Box sx={{ minWidth: 0, height:1000 }}>
            <Card variant="outlined" sx={{ minWidth: 0, height:1000 }}>
              <CardContent>
                <SelectionMenu/>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={13}>
                
        </Grid>
      </Grid> 
    );
  }
}

export default App;
