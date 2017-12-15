import React,{ Component } from 'react';
import './roommapstyles.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { getseatAction,checkseatAction,conferenceseatcheckedAction,concerthallseatcheckedAction,auditoriumseatcheckedAction,getroommapAction } from '../../container/rommap/action'
const x = [{},{}]
class GetRoomMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      lecturehallseatchecked:[[],[],[],[],[],[]],
      lecturehallseat:[],
      roomtype:4,
      conferenceseat:[],
      conferenceseatchecked:[[],[],[],[]],
      auditoriumseat:[],
      auditoriumseatchecked:[[[],[],[]],[[],[]],[[],[],[],[]]],
      concerthallseat:[],
      concerthallseatchecked:[[[],[]],[[],[]],[[],[]],[[],[]],[[],[],[]],[[],[],[],[],[],[]]],
      payment: false
    }
  }
  componentDidMount(){
    this.props.getroommapAction(this.props.buyseatReducer.roomnumber)
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
        
            lecturehallseatchecked[j].splice(i,1)
          }
        })
     
      }
    })
    this.setState({lecturehallseatchecked:lecturehallseatchecked})
  }
  
  
   
  }


  proceedlecturehall=()=>{
     var x = this.state.lecturehallseat
     var y = this.state.lecturehallseatchecked
     
     var z = {...y,...x}
     
     this.props.checkseatAction(y)

    this.setState({payment: true})
  }
  proceedconferencehall=()=>{
    var x = this.state.conferenceseat
    var y = this.state.conferenceseatchecked
    
    var z = {...y,...x}
    this.props.conferenceseatcheckedAction(y)
    this.setState({payment: true})
     

 }
 proceedconcerthall=()=>{
  var x = this.state.concerthallseat
  var y = this.state.concerthallseatchecked
  
  var z = {...y,...x}
  this.props.concerthallseatcheckedAction(y)
  
  this.setState({payment: true})
 }
 proceedauditorium=()=>{
  var x = this.state.auditoriumseat
  var y = this.state.auditoriumseatchecked
  this.props.auditoriumseatcheckedAction(y)
  this.setState({payment: true})
 }

  checkseatconferencehall=(x,i)=>{

        if(x.taken==false){
        x.taken = true
        var conferenceseatchecked = this.state.conferenceseatchecked
        conferenceseatchecked.map((data,j)=>{
         
          if(i==j){
            conferenceseatchecked[i].push(x)
           
          }
        })
        this.setState({conferenceseatchecked:conferenceseatchecked})
      }else if (x.taken==true){
        x.taken = false
        var conferenceseatchecked = this.state.conferenceseatchecked
        conferenceseatchecked.map((data,j)=>{
          if(i==j){
            data.map((datas,i)=>{
              if(datas.taken == false){
            
                conferenceseatchecked[j].splice(i,1)
              }
            })
         
          }
        })
        this.setState({conferenceseatchecked:conferenceseatchecked})
      }
      
      }
      checkauditorium=(x,index1,index2)=>{
              var auditoriumchecked = this.state.auditoriumseatchecked
              if(x.taken==false){
                x.taken = true
                
                
                auditoriumchecked[index2].map((data1,i)=>{
                  if(index1==i){
                    auditoriumchecked[index2][i].push(x)
                  }
               
                })
              }else if (x.taken==true){
                x.taken = false
                auditoriumchecked[index2].map((data1,i)=>{
                  if(index1==i){
                  data1.map((data2,j)=>{
                    if(data2.taken==false){
                      auditoriumchecked[i].splice(i,1)
                    }
                  })
                }
                })
              }
              this.setState({auditoriumchecked:auditoriumchecked})
              
              }
      checkconcerthall=(x,index1,index2)=>{
        var concerthallchecked = this.state.concerthallseatchecked
        if(x.taken==false){
          x.taken = true
          
          
          concerthallchecked[index2].map((data1,i)=>{
            if(index1==i){
              concerthallchecked[index2][i].push(x)
            }
         
          })
        }else if (x.taken==true){
          x.taken = false
          concerthallchecked[index2].map((data1,i)=>{
            if(index1==i){
            data1.map((data2,j)=>{
              if(data2.taken==false){
                concerthallchecked[i].splice(i,1)
              }
            })
          }
          })
        }
        this.setState({concerthallchecked:concerthallchecked})
      } 

  render(){
    this.state.lecturehallseat = this.props.buyseatReducer.seat
    this.state.conferenceseat = this.props.buyseatReducer.seat
    this.state.auditoriumseat = this.props.buyseatReducer.seat
    this.state.concerthallseat = this.props.buyseatReducer.seat
   
    if (this.props.buyseatReducer.number == 3 && this.state.lecturehallseat) {
      return getLectureHallMap(this.state.lecturehallseat[0], this.props.name, this.props.cancel, this.proceedlecturehall, this.props.pickSeat,this.checkseat,this.state.lecturehallseatchecked,this.state.payment);
    }else if (this.props.buyseatReducer.number == 4 && this.state.conferenceseat) {
      return getConferenceMap(this.state.conferenceseat[0], this.props.name,this.checkseatconferencehall,this.state.conferenceseatchecked,this.proceedconferencehall, this.props.cancel,this.state.payment)}
      else if (this.props.buyseatReducer.number == 2 && this.state.concerthallseat) {
        return getConcertHallMap(this.state.concerthallseat, this.props.name,this.checkconcerthall,this.state.concerthallseatchecked,this.proceedconcerthall, this.props.cancel,this.state.payment);
      }
 else if (this.props.buyseatReducer.number == 1 && this.state.auditoriumseat) {
  return getAuditoriumMap(this.state.auditoriumseat, this.props.name,this.checkauditorium,this.state.auditoriumseatchecked,this.proceedauditorium, this.props.cancel,this.state.payment);
} else {
  return null;
}
}
}

const getLectureHallMap=(hall, name, cancel, proceed, pickSeat,test,checked,payment)=> {
  let row = hall.map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return (
          <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,i)}}>{item.col}</div>
        );
      } else {
        return (
          <div className="room-map-seat vertical-seat" onClick={()=>{test(item,i)}}>{item.col}</div>
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
  let tmp = ''
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container lecture-hall">
        {row}
        <div className="room-map-screen">SCREEN</div>
      </div>
      {(payment)? <Redirect to="/payment"/>:null}
      <div className="room-map-monitor">
        {checked.map((data1,i)=>{
          
          if(data1.length != 0){
            data1.map((data2,j)=>{
              if(i==5){
                tmp += data2.col+'A '
              }else if (i==4){  
                tmp += data2.col+'B '
              }else if (i==3){
                tmp += data2.col+'C '
              }else if (i==2){
                tmp += data2.col+'D '
              }else if (i==1){
                tmp += data2.col+'E '
              }else if (i==0){
                tmp += data2.col+'F '
              }
  
            })
  
            
          }
          if(i==5){
            return tmp;
          }
          
        })}
      </div>
      <div className="room-map-button-container">
          <button className="room-map-button-red" onClick={cancel}>Cancel</button>
          <button className="room-map-button-green" onClick={()=>{proceed()}} >Proceed</button>
        </div>
    </div>
  );
}

function getConferenceMap(room, name,test,checked,proceed, cancel,payment) {
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
  let tmp =''
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      {(payment)? <Redirect to="/payment"/>:null}
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
      <div className="room-map-monitor">
      {checked.map((data1,i)=>{
          
          if(data1.length != 0){
            data1.map((data2,j)=>{
              if(i==5){
                tmp += data2.id+'A '
              }else if (i==4){  
                tmp += data2.id+'B '
              }else if (i==3){
                tmp += data2.id+'C '
              }else if (i==2){
                tmp += data2.id+'D '
              }else if (i==1){
                tmp += data2.id+'E '
              }else if (i==0){
                tmp += data2.id+'F '
              }
  
            })
        
            
          }
          if(i==3){
            return tmp;
          }
          
        })}
      </div>
      <div className="room-map-button-container">
          <button className="room-map-button-red" onClick={cancel}>Cancel</button>
          <button className="room-map-button-green" onClick={()=>{proceed()}}>Proceed</button>
        </div>
    </div>
  );
}
function getAuditoriumMap(room, name,test,checked,proceed, cancel, payment) {
  let zone1 = room[0].map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,i,0)}}>{item.col}</div>
      } else {
        return <div className="room-map-seat vertical-seat" onClick={()=>{test(item,i,0)}}>{item.col}</div>
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
        {seat}
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
      </div>
    );
  });
  let zone2 = room[1].map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,i,1)}}>{item.col}</div>
      } else {
        return <div className="room-map-seat vertical-seat" onClick={()=>{test(item,i,1)}}>{item.col}</div>
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
        {seat}
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
      </div>
    );
  });
  let zone3 = room[2].map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return <div className="room-map-seat-taken horizontal-seat" onClick={()=>{test(item,i,2)}}>{item.col}</div>
      } else {
        return <div className="room-map-seat horizontal-seat" onClick={()=>{test(item,i,2)}}>{item.col}</div>
      }
    });
    return (
      <div className="room-map-column">
        <div className="room-map-row-label horizontal-seat">{String.fromCharCode(65 + i)}</div>
        {seat}
        <div className="room-map-row-label horizontal-seat">{String.fromCharCode(65 + i)}</div>
      </div>
    );
  });
  let tmp =''
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container auditorium-room">
        <div className="auditorium-projection-room">
            Rear Projection Room
          <div className="auditorium-screen">
            screen
          </div>
        </div>
        <div className="auditorium-zone-1">
          {zone1}
        </div>
        <div className="auditorium-zone-2">
          {zone2}
        </div>
        <div className="auditorium-zone-3">
          <div className="column-wrapper">{zone3}</div>
        </div>
      </div>
      <div className="room-map-monitor">
      {checked.map((data1,i)=>{
  
          
            data1.map((data2,j)=>{
              if(data2.length!=0){
                data2.map((data3,z)=>{
                  console.log(i,j,z)
                   if(i==0&&j==0){
                tmp += '1-'+data3.col+'A '
              }else if (i==0&&j==1){  
                tmp += '1-'+data3.col+'B '
              }else if (i==1&&j==0){
                tmp += '2-'+data3.col+'A '
              }else if (i==1&&j==1){
                tmp += '1-'+data3.col+'B '
              }else if (i==2&&j==0){
                tmp += '2-'+data3.col+'A '
              }else if (i==2&&j==1){
                tmp += '2-'+data3.col+'B '
              }else if (i==2&&j==2){
                tmp += '2-'+data3.col+'C '
              }else if (i==2&&j==3){
                tmp += '2-'+data3.col+'D '
              }
  
                })
              }
             
            })
       
            
          
          if(i==2){
            console.log(tmp)
            return tmp;
          }
          
        })}
      </div>
      {(payment)? <Redirect to="/payment"/>:null}
      <div className="room-map-button-container">
          <button className="room-map-button-red" onClick={cancel}>Cancel</button>
          <button className="room-map-button-green" onClick={()=>{proceed()}}>Proceed</button>
        </div>
    </div>
  );
}
function getConcertHallMap(hall, name,test,checked,proceed, cancel, payment) {
  let zone = hall.map((data, i) => {
    if (i < 4) {
      return data.map((row, j) => {
        let seat = row.map((item) => {
          if (item.taken) {
            return <div className="room-map-seat-taken horizontal-seat" onClick={()=>{test(item,j,i)}}>{item.col}</div>
          } else {
            return <div className="room-map-seat horizontal-seat"  onClick={()=>{test(item,j,i)}}>{item.col}</div>
          }
        });
        return (
          <div className="room-map-column">
            <div className="room-map-row-label horizontal-seat">{String.fromCharCode(65 + j)}</div>
            {seat}
            <div className="room-map-row-label horizontal-seat">{String.fromCharCode(65 + j)}</div>
          </div>
        );
      });
    } else {
      return data.map((row, j) => {
        let seat = row.map((item) => {
          if (item.taken) {
            return <div className="room-map-seat-taken vertical-seat" onClick={()=>{test(item,j,i)}}>{item.col}</div>
          } else {
            return <div className="room-map-seat vertical-seat"  onClick={()=>{test(item,j,i)}} >{item.col}</div>
          }
        });
        return (
          <div className="room-map-row">
            <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + j)}</div>
            {seat}
            <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + j)}</div>
          </div>
        );
      });
    }
  });
  let tmp = '' 
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      {(payment)? <Redirect to="/payment"/>:null}
      <div className="room-map-seat-container concert-hall">
        <div className="concert-hall-zone-1">
          <div className="column-wrapper zoneA">{zone[0]}</div>
        </div>
        <div className="concert-hall-zone-2">
          <div className="column-wrapper zoneA">{zone[1]}</div>
        </div>
        <div className="concert-hall-zone-3">
          <div className="column-wrapper zoneB">{zone[2]}</div>
        </div>
        <div className="concert-hall-zone-4">
          <div className="column-wrapper zoneB">{zone[3]}</div>
        </div>
        <div className="concert-hall-zone-5">
          {zone[4]}
        </div>
        <div className="concert-hall-zone-6">
          {zone[5]}
        </div>
        <div className="concert-stage">STAGE</div>
      </div>
      <div className="room-map-monitor">
      {checked.map((data1,i)=>{
        console.log(data1)
          
            data1.map((data2,j)=>{
              if(data2.length!=0){
                data2.map((data3,z)=>{
                  console.log(i,j,z)
                   if(i==0&&j==0){
                tmp += '1-'+data3.col+'A '
              }else if (i==0&&j==1){  
                tmp += '1-'+data3.col+'B '
              }else if (i==1&&j==0){
                tmp += '2-'+data3.col+'A '
              }else if (i==1&&j==1){
                tmp += '1-'+data3.col+'B '
              }else if (i==2&&j==0){
                tmp += '3-'+data3.col+'A '
              }else if (i==2&&j==1){
                tmp += '3-'+data3.col+'B '
              }else if (i==3&&j==0){
                tmp += '4-'+data3.col+'A '
              }else if (i==3&&j==1){
                tmp += '4-'+data3.col+'B '
              }else if (i==4&&j==0){
                tmp += '5-'+data3.col+'A '
              }else if (i==4&&j==1){
                tmp += '5-'+data3.col+'B '
              }else if (i==4&&j==2){
                tmp += '5-'+data3.col+'C '
              }else if (i==5&&j==0){
                tmp += '6-'+data3.col+'A '
              }else if (i==5&&j==1){
                tmp += '5-'+data3.col+'B '
              }else if (i==5&&j==2){
                tmp += '5-'+data3.col+'C '
              }else if (i==5&&j==3){
                tmp += '5-'+data3.col+'D '
              }else if (i==5&&j==4){
                tmp += '5-'+data3.col+'E '
              }else if (i==5&&j==5){
                tmp += '5-'+data3.col+'F '
              }
  
                })
              }
             
            })
       
            
          
          if(i==5){
       
            return tmp;
          }
          
        })}
      </div>
      <div className="room-map-button-container">
          <button className="room-map-button-red" onClick={cancel}>Cancel</button>
          <button className="room-map-button-green"onClick={()=>{proceed()}}>Proceed</button>
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
  checkseatAction,
  conferenceseatcheckedAction,
  concerthallseatcheckedAction,
  auditoriumseatcheckedAction,
  getroommapAction
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(GetRoomMap)