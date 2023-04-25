import React from 'react';
import '../Styles/App.css';
import SelectionMenu from './Selector'
import Scene from './3D/ThreeScene'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

class Content extends React.Component{
  constructor(props) {
    super(props);
    this.state = { dir:"", isActive:false};
  }


  updateDir(dir){
    console.log(dir);
    this.setState({ dir:dir });
    this.setState({isActive:true});
  }

  GetCanvas(){
    console.log("isActive="+this.state.isActive.toString());
    if(!this.state.isActive){
      return(
        <Typography></Typography>
      );
    }else{
      return(
        <Scene dir={this.state.dir}></Scene>
      );
    }
  }

  render(){
    return (
      <Stack 
      direction="row"
      spacing={0}
      sx={{height:'100%', overflow:'hidden'}}>
        <Box sx={{height:'100%', display:'block', width:550, overflow:'scroll', boxSizing:'border-box'}}>
          <SelectionMenu getDir={(x)=>this.updateDir(x)}/>
        </Box>
        <Box sx={{height:'100%', boxSizing:'border-box', width:'calc(100% - 550px)', position:'relative', borderRadius:'10px', marginLeft:1, backgroundColor:'grey', backgroundImage:'url(PicoRentalsGreen.png)'}}>
          <div id="three">
          {this.GetCanvas()}
          </div>
        </Box>
      </Stack>
        
    );
  }
}

export default React.memo(Content);