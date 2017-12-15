import { constants } from './constants'
const { GETSEATACTION,CHECKSEATACTION,CONFERENCESEATCHECKEDACTION,CONCERTHALLSEATCHECKEDACTION,AUDITORIUMSEATCHECKEDACTION,CHANGEROOMTYPEACTION,GETROOMMAPACTION } = constants

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
      conferenceseatchecked:[],
      auditoriumseat:[
        [
          [
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
            }
          ]
        ], [
          [
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
            }
          ]
        ], [
          [
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
              taken: true
            }
          ]
        ]
      ],
      auditoriumseatchecked:[],
      concerthallseat:[
        [
          [
            {
              id: 1,
              taken: false
            }, {
              id: 2,
              taken: false
            }, {
              id: 3,
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
            }
          ]
        ], [
          [
            {
              id: 1,
              taken: false
            }, {
              id: 2,
              taken: false
            }, {
              id: 3,
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
            }
          ]
        ], [
          [
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
            }
          ]
        ], [
          [
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
            }
          ]
        ], [
          [
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
              id:10,
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
              id:10,
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
              id:10,
              taken: false
            }
          ]
        ], [
          [
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
            }
          ]
        ]
      ],
      concerthallseatchecked:[],
      number:1,
      roomnumber:1
      
}
  
  export const buyseatReducer = (state=buyseatstate,action) =>{
      switch(action.type){
          case GETSEATACTION:
            return{...state,seat:action.payload}
          break;
          case CHECKSEATACTION:
            return{...state,lecturehallseatchecked:action.payload}
          break;
          case CONFERENCESEATCHECKEDACTION:
            return{...state,conferenceseatchecked:action.payload}
          break;
          case CONCERTHALLSEATCHECKEDACTION:
            return{...state,concerthallseatchecked:action.payload}
          break;
          case AUDITORIUMSEATCHECKEDACTION:
            return{...state,auditoriumseatchecked:action.payload}
          break;
          case CHANGEROOMTYPEACTION:
          return{...state,number:action.payload.number,roomnumber:action.payload.roomnumber}
          break
          case GETROOMMAPACTION:
            return{...state,seat:action.payload}
          break
       default: return state
      }
  }