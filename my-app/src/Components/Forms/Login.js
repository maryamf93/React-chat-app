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
      clicked: false,
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
    this.setState({ ...this.state, clicked: true })
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    if (emailError !== null || passwordError !== null) {
      this.setState({ ...this.state,
        clicked: true,
        error: { ...this.state.error,
          email: emailError,
          password: passwordError
        }
      })
    } else {
      // let fdata = new FormData()
      // console.log('requestSrc', this.state.email)
      // console.log('requestToken', this.state.password)
      // fdata.append('email', this.state.email)
      // fdata.append('password', this.state.password)
      let data = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post('https://api.paywith.click/auth/signip/', data)
        .then(response => {
          console.log('response::::', response.data)
          window.localStorage.setItem('token', response.data.data.token)
          window.localStorage.setItem('id', response.data.data.profile.id)
          // this.setState({ email: '', password: '' })
        })
        .catch(error => {
          console.log('error::::', error)
        })
    }
  }

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
          { this.state.clicked === true &&
            <Link
              to='/messenger/'
              className='link  input-box submit'
            >
            Messenger
            </Link>
          }
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
