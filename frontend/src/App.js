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
      spacing={0}
      sx={{height:'100%', overflow:'hidden'}}>
        <Box sx={{height:'100%', display:'block', width:550, overflow:'scroll', boxSizing:'border-box'}}>
          <SelectionMenu/>
        </Box>
        <Box sx={{height:'100%', boxSizing:'border-box', width:'calc(100% - 550px)', position:'relative', borderRadius:'10px', marginLeft:1, backgroundColor:'grey'}}>
          <Typography>Test test</Typography>
        </Box>
      </Stack>
        
    );
  }
}

export default App;
