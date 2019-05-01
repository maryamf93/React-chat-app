import React from 'react'
import Input from './Input'
import logo from '../../logo.svg'

class SignUp extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      email: '',
			password: '',
			confirmPassword: ''
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

  render () {
    return (
      <div className = 'container' >
        <h1>
          Sign Up
        </h1>
        <p>
          Please fill in this form to create an account!
        </p>
        <hr />
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
        <input
          className = 'input-box'
          type = 'password'
          name = 'confirmPassword'
					placeholder = 'confirm password'
					value = {this.state.confirmPassword}
					onChange = {this.onChange} 
        />
				<button 
					className = 'submit input-box' 
					onClick = {this.onClick}
				>
          Sign Up
        </button>
      </div>
    )
  }
}

export default SignUp
