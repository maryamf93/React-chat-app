import React, { Component } from 'react'
import PropTypes from 'prop-types'
import camera from '../../image/camera.png'

class InputFileReader extends Component {
  constructor () {
    super()
    this.state = {
      src: '',
      value: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.inputFileChanged = this.inputFileChanged.bind(this)
  };
  handleClick () {
    let input = this.refs.input_reader
    input.click()
  };
  inputFileChanged (e) {
    if (window.FileReader) {
      let file = e.target.files[0]; let reader = new FileReader(); let self = this
      reader.onload = function (r) {
        self.setState({
          src: r.target.result
        })
      }
      reader.readAsDataURL(file)
      self.setState({ value: reader })
    } else {
      alert('Soryy, your browser does\'nt support for preview')
    }
  }
  render () {
    const { accept, capture, multiple } = this.props; const { src, value } = this.state
    console.log('url::::', value)
    return (
      <div>
        <img src={src} height={100} width={80} className='pro-img-box profile' />
        <img src={camera} className='camera-icon' onClick={this.handleClick} />
        <input
          type='file'
          ref='input_reader'
          accept={Array.isArray(accept) ? accept.join(',') : accept}
          multiple={multiple} capture={capture} style={{ display: 'none' }}
          onChange={this.inputFileChanged}
        />
      </div>
    )
  }
}
InputFileReader.defaultProps = {
  accept: 'image/*',
  capture: true,
  multiple: false
}
InputFileReader.propTypes = {
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  capture: PropTypes.bool,
  multiple: PropTypes.bool
}

export default InputFileReader
