import React,{Component} from 'react';
import EventBox from '../event-box/index';
import './event-categorystyles.css';
import { getcategoryroomAction } from '../..//container/attendhome/action'
import { connect } from 'react-redux'

const x = [{},{}]
const mock_data = [{
    title: 'Plays',
    today: [
      {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }
    ],
    yesterday: [
      {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }
    ]
  }, {
    title: 'Concerts',
    today: [
      {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }
    ],
    yesterday: [
      {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }, {
        name: 'event-name',
        time: 'dd-mm-yyyy',
        hall: 'A2'
      }
    ]
  }]
class EventCategory extends Component {
    componentDidMount(){
        this.props.getcategoryroomAction()
    }
    today = mock_data[0].today.map((data, i) => {
        
            return <EventBox event={data} isLast={(i + 1) == mock_data[0].today.length} key={'today' + i} />
          });
    yesterday = mock_data[0].yesterday.map((data, i) => {
            
                return <EventBox event={data} isLast={(i + 1) == mock_data[0].yesterday.length} key={'ytday' + i}/>
              });
    rendercategory =()=> this.props.attendhomeReducer.categoryroom.map((data,i)=>{
    
        return (
            
            <div key={i} className="event-category-host">
            <h2 > {data.name} </h2>
            <div className="event-category-content">
              <div className="event-category-day">
                <h3>Today</h3>
                {this.today}
              </div>
              <div className="event-category-day">
                <h3>YesterDay</h3>
                {this.yesterday}
              </div>
            </div>
          </div>)
    })
    render(){
       

 if(this.props.attendhomeReducer.categoryroom){
  return this.rendercategory()
 }else{
     return null
 }

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
export default connect(mapStatetoProps,mapDispatchtoProps)(EventCategory)