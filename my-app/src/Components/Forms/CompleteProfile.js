// import React from 'react'
import validate from '../../validation/validateFunction'
import profile from '../../image/profile.png'
import user from '../../image/user.png'
import bio from '../../image/bio.png'
import axios from 'axios'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import camera from '../../image/camera.png'
// import InputFileReader from './InputFileReader'

class CompleteProfile extends React.Component {
  constructor () {
    super()
    this.state = {
      imageUrl: '',
      firstName: '',
      lastName: '',
      bio: '',
      error: {
        firstName: null,
        lastName: null,
        bio: null
      },
      src: '',
      value: '',
      token: window.localStorage.getItem('token')
    }

    this.handleClick = this.handleClick.bind(this)
    this.inputFileChanged = this.inputFileChanged.bind(this)
  }

  handleClick () {
    let input = this.refs.input_reader
    input.click()
  }

  inputFileChanged (e) {
    if (window.FileReader) {
      let file = e.target.files[0]
      let reader = new FileReader()
      let self = this
      console.log('0000000000000', e.target.files[0])
      reader.onload = function (r) {
        self.setState({
          src: r.target.result
          
        },
        console.log('1111', r.target.result))
      }

      reader.readAsDataURL(file)
      self.setState({ value: reader })
    } else {
      alert('Soryy, your browser does\'nt support for preview')
    }
  }

  // saveProfileUrl (src) {
  //   console.log('srcForm..', src)
  //   this.setState({ src })
  // }

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
    let fdata = new FormData()
    console.log('requestSrc', this.state.src)
    console.log('requestToken', this.state.token)
    console.log('requestName', this.state.firstName)
    console.log('requestbio', this.state.bio)
    fdata.append('token', this.state.token)
    fdata.append('name', this.state.firstName)
    fdata.append('description', this.state.bio)
    fdata.append('avatar', this.state.src)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/auth/profile/', fdata
    //   {onUploadProgress: progressEvent => {
    //     console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    //   }
    // }
    )
      .then(response => {
        console.log('responseprofile::::', response)
        // console.log('srcurl', this.props.src)
      })
      .catch(error => {
        console.log('error::::', error)
      })
  }

  render () {
    const { accept, capture, multiple } = this.props
    const { src, value } = this.state
    // console.log('srcurlstate', this.state.src)
    // console.log('srcurlprops', this.props.src)
    return (
      <idv className='App' >
        <div className='container' >
          <h1>
              Complete Profile
          </h1>
          <div>
            <img src={src} height={100} width={80} className='pro-img-box profile' />
            <img src={camera} className='camera-icon' onClick={this.handleClick} />
            <input
              type='file'
              ref='input_reader'
              accept={Array.isArray(accept) ? accept.join(',') : accept}
              multiple={multiple}
              capture={capture}
              style={{ display: 'none' }}
              onChange={this.inputFileChanged}
            />
          </div>
          {/* <InputFileReader
            saveProfileUrl={(src) => this.saveProfileUrl(src)}
          /> */}
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

CompleteProfile.defaultProps = {
  accept: 'image/*',
  capture: true,
  multiple: false
}
CompleteProfile.propTypes = {
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  capture: PropTypes.bool,
  multiple: PropTypes.bool
}

export default CompleteProfile
