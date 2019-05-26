import React from 'react'
import axios from 'axios'
import { saveMessages } from '../../Action/conversation'
import moment from 'moment'

class Conversation extends React.Component {
  onClick () {
    let date = Math.ceil(new Date().getTime() / 1000)
    console.log('date', this.props.token)
    let fdata = new FormData()
    fdata.append('token', this.props.token)
    fdata.append('conversation_id', this.props.conversationId)
    fdata.append('size', 10)
    fdata.append('date', date)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then(response => {
        console.log('responsemessages', response)
        this.props.dispatch(saveMessages(
          response.data.data.messages,
          this.props.userName,
          this.props.avatar,
          this.props.conversationId)
        )
      })
      .catch(error => {
        console.log('error...', error)
      })
  }

  render () {
    return (
      <div className='conversation-box'
        onClick={() => this.onClick()}
      >
        <div className='pro-img-box'>
          <img
            className='profile-img'
            src={this.props.avatar}
          />
        </div>

        <div className='contentContainer' >
          <div className='info-conversation' >
            <span className='contact-name'>
              {this.props.userName.slice(0, -10)}
            </span>
            <span className='date'>
              {moment(this.props.date).calendar()}
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
