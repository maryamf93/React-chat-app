import React from 'react'
import validate from '../../validation/validateFunction'
import axios from 'axios'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import emailIcon from '../../image/emailIcon.png'
import passIcon from '../../image/passIcon.png'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        email: null,
        password: null
      }
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

  onClick () {
    // var emailError = validate('email', this.state.email)
    // var passwordError = validate('password', this.state.password)
    // var error = {}
    // error.email = emailError
    // error.password = passwordError
    // this.setState({ error })
    // this.setState({ ...this.state,
    //   error: {
    //     ...this.state.error, email: emailError, password: passwordError }
    // })

    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log('response...', response)
        window.localstorage.setItem('token', response.data.data.token) //save token in localstorage
        window.localstorage.setItem('id', response.data.data.profile.id) //save id
      })
      .catch(function (error) {
        console.log('error...', error)
      })
      // window. giv token
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

          <div className='input-box'>
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

          { this.state.error.email !== null &&
          <p className='error-message' >
            {this.state.error.email}
          </p>
          }

          <div className='input-box'>
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

          { this.state.error.password !== null &&
          <p className='error-message' >
            {this.state.error.password}
          </p>
          }

          <button
            className='submit input-box'
            onClick={() => this.onClick()}
          >
            Log in
          </button>
          <p>
            Don't have an account?
            <Link
              to='/signup/'
              className='link'
            >
              SIGN UP
            </Link>
          </p>

        </div>
      </div>
    )
  }
}

export default Login
