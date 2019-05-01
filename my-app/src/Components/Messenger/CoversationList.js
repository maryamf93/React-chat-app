import React from 'react'
import Conversation from './Conversation'

class ConversationList extends React.Component {
  render () {
    return (
      <div className='conversationList-box'>
        <Conversation />
      </div>
    )
  }
}

export default ConversationList
