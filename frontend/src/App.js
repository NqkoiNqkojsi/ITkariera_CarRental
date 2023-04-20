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

class App extends React.Component{
  render(){
    return (
      <Stack 
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={0}>
        <Box sx={{height:'100%', display:'block', width:550,}}>
          <SelectionMenu/>
        </Box>
        <Box sx={{height:'100%', display:'block', background:grey}}>
          <Typography>Test test</Typography>
        </Box>
      </Stack>
        
    );
  }
}

export default App;
