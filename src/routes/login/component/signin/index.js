import React from 'react';
import './signinstyles.css';
import { Redirect } from 'react-router';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      pass: '',
      isDone:false
    }
  }

  onSubmit = () => {
    console.log('submit', this.state);
    let body = {
      email:this.state.mail,
      pass:this.state.pass
    }
    fetch('https://convention-center-261342.herokuapp.com/api/login/signin',
    {method:'POST',
    headers: {
      Accept:'application/json',
      'Content-Type': 'application/json'
    },
  body:JSON.stringify(body)})
      .then((data)=>{data.json().then((data)=>{
         console.log(data)
         if (data.success) {
    
          localStorage.setItem('uid',data.login_id)
         this.setState({isDone: true});
          
         }
      })
      }).catch((error)=>{
         
      })
    }
  

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>{(this.state.isDone)? <Redirect to="/" />:null}
      <form className="signin-host">
        <input
          type="email"
          name="mail"
          value={this.state.mail}
          placeholder="Email"
          onChange={this.onChange}
        />
        <input
          type="password"
          name="pass"
          value={this.state.pass}
          placeholder="Password"
          onChange={this.onChange}
        />
        <button className="submit" type="button" onClick={this.onSubmit}>Log In</button>
      </form>
      </div>
    );
  }
}

export default Signin