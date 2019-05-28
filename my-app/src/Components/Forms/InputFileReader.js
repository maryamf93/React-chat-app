import React, { Component } from 'react'
import PropTypes from 'prop-types'
import camera from '../../image/camera.png'
// import { saveProfileUrl } from '../../Action/conversation'

class InputFileReader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      src: '',
      value: ''
    }

    console.log('saveProfile000', this.props.saveProfileUrl)
    this.handleClick = this.handleClick.bind(this)
    this.inputFileChanged = this.inputFileChanged.bind(this)
    this.props.saveProfileUrl = this.props.saveProfileUrl.bind(this)
  }

  handleClick () {
    let input = this.refs.input_reader
    input.click()
  }
  

  inputFileChanged (e) {
    if (window.FileReader) {
      let file = e.target.files[0]; let reader = new FileReader(); let self = this
      reader.onload = function (r) {
        self.setState({
          src: r.target.result

        },

        () => {
          console.log('props0000', this.props)
          // console.log('this0000', this.state.src)
          console.log('self0000', self.state.src)
        })
        //
      }

      reader.readAsDataURL(file)
      self.setState({ value: reader }, function () {
        // console.log('22222', self.state.src)
        console.log('333333', this.state.value)
        
    console.log('saveProfile', this.props.saveProfileUrl)
      }, 1000)

      
    } else {
      alert('Soryy, your browser does\'nt support for preview')
    }
  }
  componentDidUpdate (prevState) {

    
    console.log('mounttttt', this.state.src)
    // console.log('333333', this.state.value)
    console.log('mountttttt', this.props.saveProfileUrl)
    // if (this.state.src !== prevState.src) {
    //   return (
        // this.props.savePropfileUrl(this.state.src)
    // }
  }

  render () {
    const { accept, capture, multiple } = this.props
    const { src, value } = this.state
    console.log('thisstate', this.state)
    console.log('77777', this.props.dispacth)
    console.log('props555555', this.props)

    // function saveProfileUrl (this.state.src) {
    //   return(
    //     console.log('src22', src)
    //   )

    //   }
    // src

    console.log('88888', this.state.src)
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
