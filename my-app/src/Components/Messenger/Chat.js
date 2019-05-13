import React from 'react'
import Header from './header'
import Footer from './footer'
import ChatScreen from './ChatScreen'

class Chat extends React.Component {
  render () {
    return (
      <div className='chat-box-outer'>
        <Header />
        <ChatScreen />
        <Footer />
      </div>
    )
  }
}

export default Chat
