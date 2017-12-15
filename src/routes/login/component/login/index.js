import React,{ Component } from 'react';
import  Signup  from '../signup/index'
import  Signin  from '../signin/index'
import './loginstyles.css';

class Login extends Component {
  render() {
    return (
      <div className="login-host">
        <div className="login-signup">
          <h2 className="login-title">Sign Up</h2>
          <Signup/> 
        </div>
        <div className="divider"/>
        <div className="login-signin">
          <h2 className="login-title">Sign In</h2>
          <Signin/> 
        </div>
      </div>
    );
  }
}

export default Login