import React from 'react'
import Input from './Input'
import logo from '../../logo.svg'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
  	}
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      { [name] : value }
    );
      console.log(event.target.value);
    }
     
    onClick = (event) => {
			console.log ('this is', this)
		}

    render() {
      return (
				<div className = 'container' >
          <h1>
            Log in
          </h1>
          <img className = 'logo' src={logo} />
        	<input 
            className = 'input-box' 
            type = 'email' 
            name = 'email'
          	placeholder = 'Email'
            value = {this.state.email}
            onChange = {this.onChange}
          />
          <input 
          	className = 'input-box' 
            type = 'password' 
            name = 'password'
            placeholder = 'password'
            value = {this.state.password}
            onChange = {this.onChange}          
          />
					<button 
						className = 'submit input-box' 
						onClick = {this.onClick}
					>
          	Log in
          </button>
        </div>
      );
    }
}

export default Login