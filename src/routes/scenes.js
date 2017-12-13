import React,{ Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Test from './home/index'
import Home from './home/component/attendhome/index'
import BuySeat from './buy-seat/component/buyseat/index'

class Scenes extends Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
            <Route path='/' component={BuySeat}/>
            <Route path='/home' component={Home}/>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Scenes