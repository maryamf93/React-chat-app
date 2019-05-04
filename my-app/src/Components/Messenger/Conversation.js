import React from 'react'
// import pro from '../../photo.jpg'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation-box'>

        <div className='pro-img-box'>
          <img
            className='pro-img-box'
            src={this.props.profileImg}
          />
        </div>

        <div className='left-div-conv'>
          <h4 className='contact-name'>
            {this.props.userName}
          </h4>
          <p className='message'>
            {this.props.latestMessage}
          </p>
        </div>

        <div className='right-div-conv'>
          <div className='time'>
            {this.props.time}
          </div>
          <span className='un-read-msg'>
            {this.props.unReadMsg}
          </span>
        </div>

      </div>
    )
  }
}

export default Conversation
