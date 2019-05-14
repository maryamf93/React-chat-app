import React from 'react'
import validate from '../../validation/validateFunction'
import profile from '../../image/profile.png'
import user from '../../image/user.png'
import bio from '../../image/bio.png'

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: '',
      firstName: '',
      lastName: '',
      bio: '',
      error: {
        firstName: null,
        lastName: null,
        bio: null
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
    var firstNameError = validate('firstName', this.state.firstName)
    console.log(firstNameError)
    var lastNameError = validate('lastName', this.state.lastName)
    var bioError = validate('bio', this.state.bio)
    this.setState({ ...this.state,
      error: { ...this.state.error,
        firstName: firstNameError,
        lastName: lastNameError,
        bio: bioError }
    })
    console.log(this.state)
  }

  render () {
    return (
      <idv className='App' >
        <div className='container' >
          <h1>
              Edit Profile
          </h1>
          <img className='pro-img-box profile' src={profile} />
          <div className='input-box'>
            <img
              className='material-icons'
              src={user}
            />
            <input
              className='input-box-inner'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={this.state.firstName}
              onChange={(event) => this.onChange(event)}
            />
          </div>
          { this.state.error.firstName !== null &&
            <p className='error-message'>
              {this.state.error.firstName}
            </p>
          }

          <div className='input-box'>
            <img
              className='material-icons'
              src={user}
            />
            <input
              className='input-box-inner'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={this.state.lastName}
              onChange={(event) => this.onChange(event)}
            />
          </div>
          { this.state.error.lastName !== null &&
            <p className='error-message'>
              {this.state.error.lastName}
            </p>
          }
          <div className='input-box'>
            <img
              className='material-icons'
              src={bio}
            />
            <input
              className='input-box-inner'
              type='text'
              name='bio'
              placeholder='Bio'
              value={this.state.bio}
              onChange={(event) => this.onChange(event)}
            />
          </div>
          { this.state.error.bio !== null &&
            <p className='error-message'>
              {this.state.error.bio}
            </p>
          }
          <button
            className='submit input-box'
            onClick={() => this.onClick()}
          >
            Submit
          </button>
        </div>
      </idv>
    )
  }
}

export default EditProfile
