import React,{ Component } from 'react';
import './roommapstyles.css';
import { connect } from 'react-redux'
import { getseatAction,checkseatAction } from '../../container/rommap/action'
const x = [{},{}]
class GetRoomMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lecturehallseatchecked:[[],[],[],[],[],[]],
      lecturehallseat:[],
      roomtype:1,
      conferenceseat:[],
      conferenceseatchecked:[[],[],[],[]]
    }
  }
  checkseat=(x,i)=>{

    if(x.taken==false){
    x.taken = true
    var lecturehallseatchecked = this.state.lecturehallseatchecked
    lecturehallseatchecked.map((data,j)=>{
     
      if(i==j){
        lecturehallseatchecked[i].push(x)
       
      }
    })
    this.setState({lecturehallseatchecked:lecturehallseatchecked})
  }else if (x.taken==true){
    x.taken = false
    var lecturehallseatchecked = this.state.lecturehallseatchecked
    lecturehallseatchecked.map((data,j)=>{
      if(i==j){
        data.map((datas,i)=>{
          if(datas.id == x.id){
            console.log(datas)
            lecturehallseatchecked[j].splice(i-1,i)
          }
        })
     
      }
    })
    this.setState({lecturehallseatchecked:lecturehallseatchecked})
  }
  console.log(this.state.lecturehallseatchecked)
   
  }
  proceed=()=>{
     var x = this.state.lecturehallseat
     var y = this.state.lecturehalllecturehallseatchecked
     var z = {...y,...x}
     this.props.checkseatAction(y)
      this.setState({roomtype:2})

  }

  checkseatconferencehall=(x,i)=>{
      console.log('dfqwdqdqwd')
        if(x.taken==false){
        x.taken = true
        var lecturehallseatchecked = this.state.lecturehallseatchecked
        lecturehallseatchecked.map((data,j)=>{
         
          if(i==j){
            lecturehallseatchecked[i].push(x)
           
          }
        })
        this.setState({lecturehallseatchecked:lecturehallseatchecked})
      }else if (x.taken==true){
        x.taken = false
        var lecturehallseatchecked = this.state.lecturehallseatchecked
        lecturehallseatchecked.map((data,j)=>{
          if(i==j){
            data.map((datas,i)=>{
              if(datas.id == x.id){
                console.log(datas)
                lecturehallseatchecked[j].splice(i-1,i)
              }
            })
         
          }
        })
        this.setState({lecturehallseatchecked:lecturehallseatchecked})
      }
      console.log(this.state.lecturehallseatchecked)
       
      }

  render(){
    this.state.lecturehallseat = this.props.buyseatReducer.lecturehallseat
    this.state.conferenceseat = this.props.buyseatReducer.conferenceseat
    if (this.state.roomtype == 1) {
      return getLectureHallMap(this.state.lecturehallseat, this.props.name, this.props.cancel, this.proceed, this.props.pickSeat,this.checkseat);
    }else if (this.state.roomtype == 2) {
      return getConferenceMap(this.state.conferenceseat, this.props.name,this.checkseatconferencehall)}
  // } else if (props.room_type == 2) {
  //   return getConferenceMap();
  // } else if (props.room_type == 3) {
  //   return getConcertHallMap();
  // } else if (props.room_type == 4) {
  //   return getAuditoriumMap();

}
}

const getLectureHallMap=(hall, name, cancel, proceed, pickSeat,test)=> {
  let row = hall.map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return (
          <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,i)}}>{item.id}</div>
        );
      } else {
        return (
          <div className="room-map-seat vertical-seat" onClick={()=>{test(item,i)}}>{item.id}</div>
        );
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(70 - i)}</div>
          {seat}
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(70 - i)}</div>
      </div>
    );
  });
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container lecture-hall">
        {row}
        <div className="room-map-screen">SCREEN</div>
      </div>
      
      <div className="room-map-button-container">
        <button className="room-map-button-red" onClick={()=>{console.log('tttt')}}>Cancel</button>
        <button className="room-map-button-green" onClick={()=>{proceed()}}>Proceed</button>
      </div>
    </div>
  );
}

function getConferenceMap(room, name,test) {
  let rowA = room[0].map((item) => {
    if (item.taken) {
      return (
        <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,0)}}>{item.id}</div>
      );
    } else {
      return (
        <div className="room-map-seat vertical-seat" onClick={()=>{test(item,0)}}>{item.id}</div>
      );
    }
  });
  let rowB = room[1].map((item) => {
    if (item.taken) {
      return (
        <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,1)}}>{item.id}</div>
      );
    } else {
      return (
        <div className="room-map-seat vertical-seat" onClick={()=>{test(item,1)}}>{item.id}</div>
      );
    }
  })
  let rowC = room[2].map((item) => {
    if (item.taken) {
      return (
        <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,2)}}>{item.id}</div>
      );
    } else {
      return (
        <div className="room-map-seat vertical-seat" onClick={()=>{test(item,2)}}>{item.id}</div>
      );
    }
  })
  let rowD = room[3].map((item) => {
    if (item.taken) {
      return (
        <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,3)}}>{item.id}</div>
      );
    } else {
      return (
        <div className="room-map-seat vertical-seat" onClick={()=>{test(item,3)}}>{item.id}</div>
      );
    }
  })
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container conference-room">
        <div className="conference-board"></div>
        <div className="conference-table">
          <div className="conference-row-A">
            {rowA}
          </div>
          <div className="conference-row-B">
            {rowB}
          </div>
          <div className="conference-row-C">
            {rowC}
          </div>
          <div className="conference-row-D">
            {rowD}
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStatetoProps= (state) => {
	return{
    buyseatReducer:state.buyseatReducer
	}
}
const mapDispatchtoProps={
  getseatAction,
  checkseatAction
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(GetRoomMap)