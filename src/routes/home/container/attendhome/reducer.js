import { constants } from './constanst'
const { GETCATEGORYROOMACTION,GETCONVENTIONACTION } = constants

const attendhomestate = {

}

export const attendhomeReducer = (state={},action) =>{
    switch(action.type){
        case GETCATEGORYROOMACTION:
            return{...state,categoryroom:action.payload}
        break;
        case'ERROR':
            return{...state}
        break;
        case GETCONVENTIONACTION:
            return{...state,descriptionroom:action.payload}
        break;
    default: return state
    }
}