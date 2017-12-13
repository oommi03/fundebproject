import { applyMiddleware,compose,createStore } from 'redux'
import { makeRootReducer } from './reducers'
import ReduxThunk from 'redux-thunk'

const mylogger = (store)=>(next)=>(action)=>{
    next(action)
    console.log(action)
}
export const store = createStore(makeRootReducer(),{},compose(applyMiddleware(ReduxThunk,mylogger)))