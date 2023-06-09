import React from 'react';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from './Menu';
import Home from './Home';
import Profile from './Profile';
import Content from './MainContent/Content';

import './Styles/Colors.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { dir:"", isActive:false, app:'home'};
  }

  changeApp(app){
    console.log(app);
    this.setState({app:app});
  }

  displayApp(){
    console.log(this.state.app);
    if(this.state.app==='home'){
      return(<Home sx={{height:'95'}}></Home>);
    }else if(this.state.app==='profile'){
      return(<Profile sx={{height:'95'}}></Profile>);
    }else{
      return(<Content sx={{height:'95'}}></Content>);
    }
  }

  render(){
    return (
        <Stack spacing={0} sx={{height:'100%', color:'#1a1c18', backgroundColor:'#fdfdf6'}}>
          <ResponsiveAppBar changeApp={(x)=>this.changeApp(x)} sx={{height:'5%'}}></ResponsiveAppBar>
          {this.displayApp()}
        </Stack>
        
    );
  }
}

export default React.memo(App);
