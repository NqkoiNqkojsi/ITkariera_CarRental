import React from 'react';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from './Menu';
import Home from './Home';
import Profile from './Profile';
import Content from './MainContent/Content';

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
