import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectionMenu from './Selector'
import Scene from './ThreeScene'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { flexbox } from '@mui/system';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import ResponsiveAppBar from './Menu';
import Home from './Home';
import Profile from './Profile';
import Content from './Content';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { dir:"", isActive:false};
  }

  render(){
    return (
      <Stack spacing={0} sx={{height:'100%'}}>
        <ResponsiveAppBar sx={{height:'5%'}}></ResponsiveAppBar>
        <Content sx={{height:'95'}}></Content>
      </Stack>
        
    );
  }
}

export default App;
