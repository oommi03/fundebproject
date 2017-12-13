import React,{ Component } from 'react';
import  GetRoomMap  from '../roommap/index'
import { connect } from 'react-redux'

const mock_data = [
  [
    {
      id: 1,
      taken: true
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }, {
      id: 11,
      taken: false
    }, {
      id: 12,
      taken: false
    }, {
      id: 13,
      taken: false
    }, {
      id :14,
      taken: false
    }, {
      id: 15,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }, {
      id: 11,
      taken: false
    }, {
      id: 12,
      taken: false
    }, {
      id: 13,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }, {
      id: 11,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: true
    }
  ]
]

 class BuySeat extends Component {
  cancel() {
    console.log('cancel');
  }

  proceed() {
    console.log('proceed');
  }

  render() {
    return(
      <div>
        <GetRoomMap room_type={1} name="Hall Name" seat={mock_data} cancel={this.cancel} proceed={this.proceed}/>
      </div>
    );
  }
}
export default connect(null)(BuySeat)