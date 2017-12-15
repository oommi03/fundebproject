import React from 'react';
import './buyticketstyles.css';
import  CardForm  from '../card-form/index'
import  { connect }  from 'react-redux'

class TicketPayment extends React.Component {
    
  render() {
    return (
      <div className="ticket-host">
      <div className="ticket-seat-info">
        <p className="ticket-seat-number">
          Seat No. : A1
        </p>
        <p className="ticket-seat-price">
          Price : 200 Baht
        </p>
      </div>
      <div className="convention-info">
        <p className="convention-title">
          Title: The Tales of Bluecollar Spotty Baboon
        </p>
        <p className="convention-room">
          Room: Concert Hall 1
        </p>
        <p className="convention-date">
          Date: 2018-01-12
        </p>
        <p className="convention-time">
          Time: 02:02:05 - 02:46:21
        </p>
      </div>
      <CardForm/>
    </div>
    );
  }
}
const mapStatetoProps= (state) => {
	return{
    buyseatReducer:state.buyseatReducer
	}
}


export default connect(mapStatetoProps,null)(TicketPayment) 