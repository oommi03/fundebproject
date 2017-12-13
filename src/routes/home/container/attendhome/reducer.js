import { constants } from './constanst'
const { GETCATEGORYROOMACTION } = constants

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
    default: return state
    }
}