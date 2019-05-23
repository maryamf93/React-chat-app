import React from 'react'
import ConversationListContainer from '../../container/ConversationListContainer'
import Chat from './Chat'

class Messenger extends React.Component {
  render () {
    return (
      <div className='messenger-box' >
        <ConversationListContainer />
        <Chat />
      </div>
    )
  }
}

export default Messenger
