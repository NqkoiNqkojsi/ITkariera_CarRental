import React from 'react';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = { dir:"", isActive:false};
  }


  updateDir(dir){
    this.setState({ dir:dir });
    this.setState({isActive:true});
  }

  GetCanvas(){
    if(this.state.isActive){
      return(
        <div></div>
      );
    }else{
      return(
        //<Scene dir={this.state.dir}></Scene>
        <div></div>
      );
    }
  }

  render(){
    return (
      <div></div>
        
    );
  }
}

export default Profile;