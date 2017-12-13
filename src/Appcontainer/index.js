import React,{ Component } from 'react'

import { Provider } from 'react-redux'
import { store } from '../store/createstore'

import Scenes from '../routes/scenes'

class AppContainer extends Component {
    render(){
        store.subscribe(()=>{
            console.log(store.getState())
        })
        return(
            <Provider store={store}>
            <Scenes/>
            </Provider>

        )
    }
}

export default AppContainer