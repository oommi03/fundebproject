import React from 'react';
import './event-boxstyles.css';

export default function EventBox(props) {
  return (
    <div className="event-box-host">
      <div className="event-box-booking-status"></div>
      <p className="event-box-name">{props.event.name}</p>
      <p className="event-box-time">{props.event.time} at {props.event.hall}</p>
    </div>
  )
}