import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionMenu from './Selector'
import Grid from '@mui/material/Grid';

class App extends React.Component{
  render(){
    return (
      <Grid container spacing={2} columns={10}>
        <Grid item xs={3}>
          <SelectionMenu/>
        </Grid>
        <Grid item xs={7}>
          
        </Grid>
      </Grid> 
    );
  }
}

export default App;
