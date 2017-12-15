import React,{ Component } from 'react';
import  GetRoomMap  from '../roommap/index'
import { connect } from 'react-redux'
import { Redirect } from'react-router'



 class BuySeat extends Component {
   constructor(props) {
     super(props);
     this.state = {
       cancel: false,
       proceed: false
     }
   }

  cancel = () => {
    console.log('cancel');
    this.setState({cancel: true})
  }

  proceed() {
    console.log('proceed');
    this.setState({proceed: true})
  }

  render() {
    return(
      <div>
        {(this.state.cancel)? <Redirect to="/"/>:null}
        {(this.state.proceed)? <Redirect to="/payment"/>:null}
        <GetRoomMap room_type={1} name="Hall Name"  cancel={this.cancel} proceed={this.proceed}/>
      </div>
    );
  }
}
export default connect(null)(BuySeat)