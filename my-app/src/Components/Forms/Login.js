import React from 'react'
// import Input from './Input'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import emailIcon from '../../image/emailIcon.png'
import passIcon from '../../image/passIcon.png'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  // eslint-desable
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
  // eslint-enable
  render () {
    return (
      <div className='App' >
        <div className='container' >
          <h1>
            Log in
          </h1>
          <img
            className='logo'
            src={logo}
            alt='chat-logo'
          />

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

          { this.state.email.length >= 2 &&
          <p>{this.state.email}</p>
          }

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

          { this.state.email.length >= 2 &&
          <p>{this.state.email}</p>
          }

          <button
            className='submit input-box'
            onClick={this.onClick}
          >
            Log in
          </button>
          <Link to='/signup/'>Users</Link>
        </div>
      </div>
    )
  }
}

export default Login
