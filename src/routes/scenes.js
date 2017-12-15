import React,{ Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Test from './home/index'
import Home from './home/component/attendhome/index'
import BuySeat from './buy-seat/component/buyseat/index'
import Login from './login/component/login/index'
import { Redirect } from 'react-router';
import TicketPayment from './buy-ticket/component/buyticket/index'

class Scenes extends Component {
    logout=()=>{
        console.log(localStorage.getItem('uid'))
        localStorage.removeItem('uid')
        console.log(localStorage.getItem('uid'))
    }
    render(){
        return(
            
            <BrowserRouter>
            <div>
            <button type="button" onClick={this.logout}>log out</button>
            <Route exact  path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route  path='/buyseat/' component={BuySeat}/>
            <Route path='/payment' component ={TicketPayment}/>
            </div>
            </BrowserRouter>
       
        )
    }
}

export default Scenes