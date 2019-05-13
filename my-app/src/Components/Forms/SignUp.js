import React from 'react'
import emailIcon from '../../image/emailIcon.png'
import passIcon from '../../image/passIcon.png'
// import Input from './Input'
// import logo from '../../logo.svg'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onChange (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState(
      { [name]: value },
      () => console.log('callback', this.state[name])
    )
    console.log(event.target.value)
  }

  onClick (event) {
    console.log('this is', this)
  }

  render () {
    return (
      <div className='App' >
        <div className='container' >
          <h1>
            Sign Up
          </h1>
          <p>
            Please fill in this form to create an account!
          </p>
          <hr />
          <div class='input-box'>
            <img
              className='material-icons'
              src={emailIcon}
            />
            <input
              className='input-box-inner'
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={(event) => this.onChange(event)}
            />
          </div>
          <div class='input-box'>
            <img
              className='material-icons'
              src={passIcon}
            />
            <input
              className='input-box-inner'
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={(event) => this.onChange(event)}
            />
          </div>

          <div class='input-box'>
            <img
              className='material-icons'
              src={passIcon}
            />
            <input
              className='input-box-inner'
              type='password'
              name='confirmPassword'
              placeholder='confirm password'
              value={this.state.confirmPassword}
              onChange={(event) => this.onChange(event)}
            />
          </div>
          { this.state.password !== this.state.confirmPassword &&
            <p> dnnhd </p>
          }

          <button
            className='submit input-box'
            onClick={this.onClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp
