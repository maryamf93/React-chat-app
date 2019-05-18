import React from 'react'
import send from '../../image/send.png'
import addNewMessage from '../../Action/conversation'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessage: '',
      messages: [
        {
          id: 1,
          message: 'salam'
        },
        {
          id: 2,
          message: 'salaaaam'
        },
        {
          id: 1,
          message: 'khubi'
        }
      ]
    }
  }

  onChange (event) {
    const value = event.target.value
    this.setState({ newMessage: value })
    this.props.getNewMessage(value)
  }

  render () {
    return (
      <div className='footer' >
        <input
          type='textarea'
          className='textarea'
          placeholder='Write a Message'
          onChange={(event) => this.onChange(event)}
        />
        <img
          src={send}
          className='send-icon'
          onClick= {() => this.props.dispatch(addNewMessage(this.state.newMessage))}
        />
      </div>
    )
  }
}

export default Footer
