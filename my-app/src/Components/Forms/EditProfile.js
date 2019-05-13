import React from 'react'
import profile from '../../image/profile.png'
import user from '../../image/user.png'
import bio from '../../image/bio.png'

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      bio: ''
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
      <idv className='App' >
        <div className='container' >
          <h1>
              Edit Profile
          </h1>
          <img className='pro-img-box profile' src={profile} />
          <div class='input-box'>
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
          <div class='input-box'>
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
          <div class='input-box'>
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

          <button
            className='submit input-box'
            onClick={this.onClick}
          >
            Submit
          </button>
        </div>
      </idv>
    )
  }
}

export default EditProfile
