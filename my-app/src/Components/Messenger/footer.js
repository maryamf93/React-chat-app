import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'
import send from '../../image/send.png'
import { addNewMessage } from '../../Action/conversation'
import axios from 'axios'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessage: '',
      token: window.localStorage.getItem('token'),
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
    // this.props.getNewMessage(value)
  }

  sendNewMessage () {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    console.log('date', this.props.conversationId)
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.conversationId)
    fdata.append('text', this.state.newMessage)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/conversation/create/', fdata)
      .then(response => {
        console.log('responsemessages', response)
        this.setState({ newMessage: '' })
      })
      .catch(error => {
        console.log('error...', error)
      })
  }

  render () {
    return (
      <div className='footer' >
        <input
          type='textarea'
          className='textarea'
          placeholder='Write a Message'
          value={this.state.newMessage}
          onChange={(event) => this.onChange(event)}
        />
        <img
          src={send}
          className='send-icon material-icons'
          onClick={() => {
            this.sendNewMessage()
          }}
        />
      </div>
    )
  }
}

export default Footer
