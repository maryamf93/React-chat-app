import React from 'react'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation-box'>

        <div className='pro-img-box'>
          <img
            className='profile-img'
            src={this.props.profileImg}
          />
        </div>

        <div className='contentContainer' >
          <div className='info-conversation' >
            <span className='contact-name'>
              {this.props.userName}
            </span>
            <span className='date'>
              {this.props.time}
            </span>
          </div>
          <div className='info-conversation' >
            <span className='message'>
              {this.props.latestMessage}
            </span>
            <span className='un-read-msg'>
              {this.props.unReadMsg}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Conversation
