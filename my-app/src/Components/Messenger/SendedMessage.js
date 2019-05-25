import React from 'react'
import moment from 'moment'

class SendedMessage extends React.Component {
  render () {
    return (
      <div className='sended-msg'>
        <span className='snd-msg-spn'>
          {this.props.sendedMsg}
        </span>
      </div>
    )
  }
}

export default SendedMessage
