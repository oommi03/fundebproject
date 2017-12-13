import React,{ Component } from 'react';
import  EventCategory  from '../evnet-category/index';
import { connect } from 'react-redux'
import './attendhomestyles.css'
import { getcategoryroomAction } from '../..//container/attendhome/action'


class Home extends Component {
    componentDidMount(){
        this.props.getcategoryroomAction()
    }
  render() {
    return (
      <div className="home-host">
         <EventCategory/>
     
      </div>
    );
  }
}
const mapStatetoProps= (state) => {
	return{
    attendhomeReducer:state.attendhomeReducer
	}
}
const mapDispatchtoProps={
    getcategoryroomAction
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(Home)