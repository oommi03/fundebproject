import React from 'react';
import './signupstyles.css';
import { Redirect } from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: '',
      role:'',
      isDone: false
    }
  }

  onSubmit = () => {
    let body = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.pass,
      role: this.state.role
    }
    console.log('submit', body);
    fetch('https://convention-center-261342.herokuapp.com/api/login/signup',
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
        console.log(data.login_id)
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

      <form className="signup-host">
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.onChange}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
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
        <select name="role" value={this.state.role} onChange={this.onChange}>
          <option value="">-- Select you role --</option>
          <option value="host">Host</option>
          <option value="attendee">Attendee</option>
        </select>
        <button className="submit" type="button" onClick={this.onSubmit}>Sign up</button>
      </form>
      </div>
    );
  }
}

export default Signup 