import React,{ Component } from 'react';
import './event-boxstyles.css';
import { connect } from 'react-redux'
import { changeroomtypeAction } from '../../../buy-seat/container/rommap/action'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

class EventBox extends Component {
  constructor(props){
    super(props)
    this.state={
      uid:localStorage.getItem('uid'),
      path:'',
      isReady: false
    }
  }
  pushpage=(i,number)=>{
    console.log(this.state.uid)
    if(this.state.uid){
      this.setState({path: '/buyseat'})
    }else {
      this.setState({path: '/login'})
    }
    console.log(this.state.path + this.props.event.id)
    this.setState({isReady: true})
    this.props.changeroomtypeAction(i,number)
    
  }
  render(){
  return (
    <div onClick={()=>{this.pushpage(this.props.page+1,this.props.event.id)}} className="event-box-host">
      <div className="event-box-booking-status"></div>
      <p className="event-box-name">{this.props.event.name}</p>
      <p className="event-box-time">{this.props.event.time} at {this.props.event.hall}</p>
      {(this.state.isReady)? <Redirect to={this.state.path}/>:null}
    </div>
  )
}
}

const mapDispatchtoProps={

    changeroomtypeAction
  }

export default connect(null,mapDispatchtoProps)(EventBox)