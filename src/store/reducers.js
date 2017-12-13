import { combineReducers } from 'redux'
import { attendhomeReducer } from '../routes/home/container/attendhome/reducer'
import { buyseatReducer } from '../routes/buy-seat/container/rommap/reducer'
export const makeRootReducer = () => {
    return combineReducers({
        attendhomeReducer:attendhomeReducer,
        buyseatReducer:buyseatReducer
    })
}