import React from 'react'
import Conversation from './Conversation'
import photo from '../../photo.jpg'

class ConversationList extends React.Component {
  render () {
    console.log(this.props.profileUrl)
    return (
      <div className='conversationList-box'>
        <div className='add-contact'>
          +
        </div>
        <Conversation
          profileImg={photo}
          contactName='React Group'
          latestMessage='hi everybody hi everybody hi e'
          time='12:35'
          unReadMsg='100000000'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='10'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='5'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='10'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='10'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='10'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='10'
        />
        <Conversation
          profileUrl={photo}
          contactName='React Group'
          latestMessage='hi everybody'
          time='12:35'
          unReadMsg='10'
        />
      </div>
    )
  }
}

export default ConversationList
