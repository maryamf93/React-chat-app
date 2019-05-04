import React from 'react'

class RecivedMessage extends React.Component {
  render () {
    return (
      <div className='recived-msg'>
        <span className='rcv-msg-spn'>
          {this.props.recivedMsg}
        </span>
        <span className='date'>
          12:16
        </span>
      </div>
    )
  }
}

export default RecivedMessage
