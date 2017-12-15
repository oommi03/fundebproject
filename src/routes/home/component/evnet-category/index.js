import React,{Component} from 'react';
import EventBox from '../event-box/index';
import './event-categorystyles.css';
import { getcategoryroomAction,getconventionAction } from '../..//container/attendhome/action'
import { connect } from 'react-redux'
import { changeroomtypeAction } from '../../../buy-seat/container/rommap/action'

const x = [{},{}]
const BOX_NAME = ['Auditorium', 'Concert Hall', 'Lecture Room', 'Conference'];

class EventCategory extends Component {
  constructor(props){
    super(props)
    this.state={
      descriptionroom:[]
    }
  }
    componentDidMount(){
        this.props.getcategoryroomAction()
        this.props.getconventionAction()
    }

    getBoxfromCate = (data,number) => data.map((item, j) => {
      let tmp = {
        name: item.title,
        time: item.startTime.slice(11,19),
        hall: item.room.name,
        id: item.id
      }
      return <EventBox onClick={()=>{console.log('dwdwd')}} event={tmp} page={number}isLast={(j + 1) == item.length} key={'ytday' + j}/>;

    })

    rendercategory =()=> this.props.attendhomeReducer.descriptionroom.map((data, i)=>{
            return (
              
            <div key={i} className="event-category-host">
              <h2 > {BOX_NAME[i]} </h2>
              <div className="event-category-content">
                <div className="event-category-day">
                  {this.getBoxfromCate(data,i)}
                </div>
              </div>
            </div>
            );
          })
    render(){
       

 if(this.props.attendhomeReducer.descriptionroom){
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
    getcategoryroomAction,
    getconventionAction,
    changeroomtypeAction
  }
export default connect(mapStatetoProps,mapDispatchtoProps)(EventCategory)