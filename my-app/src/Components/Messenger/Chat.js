import React from 'react'
import Header from './header'
import FooterContainer from '../../container/FooterContainer'
import ChatScreenContainer from '../../container/ChatScreenContainer'

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessage: ''
    }
  }

  getNewMessage (newMessage) {
    this.setState({ newMessage })
  }

  render () {
    return (
      <div className='chat-box-outer'>
        <Header />
        <ChatScreenContainer />
        <FooterContainer
          getNewMessage={(event) => this.getNewMessage(event)}
        />
      </div>
    )
  }
}

export default Chat
