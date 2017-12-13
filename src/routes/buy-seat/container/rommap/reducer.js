import { constants } from './constants'
const { GETSEATACTION,CHECKSEATACTION } = constants

const buyseatstate = {lecturehallseat:[
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
  ],
    lecturehallseatchecked:[],
    conferenceseat : [
        [
          {
            id: 1,
            taken: true
          }, {
            id: 2,
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
          }
        ], [
          {
            id: 1,
            taken: false
          }, {
            id: 2,
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
          }, 
        ]
      ],
      conferenceseatchecked:[]
      
}
  
  export const buyseatReducer = (state=buyseatstate,action) =>{
      switch(action.type){
          case GETSEATACTION:
            return{...state,seat:action.payload}
          break;
          case CHECKSEATACTION:
            return{...state,seatchecked:action.payload}
          break;
       default: return state
      }
  }