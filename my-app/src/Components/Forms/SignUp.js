import React from 'react'
import validate from '../../validation/validateFunction'
import emailIcon from '../../image/emailIcon.png'
import passIcon from '../../image/passIcon.png'
import axios from 'axios'
// import Input from './Input'
// import logo from '../../logo.svg'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: {
        email: null,
        password: null,
        confirmPassword: null
      }
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

  onClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    if (emailError !== null || passwordError !== null) {
      this.setState({ ...this.state,
        error: { ...this.state.error,
          email: emailError,
          password: passwordError
        }
      })
    } else {
      if (this.state.password === this.state.confirmPassword) {
        let data = {
          email: this.state.email,
          password: this.state.password
        }
        axios.post('https://api.paywith.click/auth/signup/', data)
          .then(response => {
            console.log('response::::', response)
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('id', response.data.id)
          })
          .catch(error => {
            console.log('error::::', error)
          })
      } else {
        this.setState({ ...this.state,
          error: { ...this.state.error,
            confirmPassword: 'Passwod and retype password do not match!'
          }
        })
      }
    }
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
            <p className='error-message'>
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
            <p className='error-message'>
              {this.state.error.password}
            </p>}
          <div className='input-box'>
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
          { this.state.error.confirmPassword !== null &&
            <p className='error-message'>
              {this.state.error.confirmPassword}
            </p>
          }

          <button
            className='submit input-box'
            onClick={() => this.onClick()}
          >
            Sign Up
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp
