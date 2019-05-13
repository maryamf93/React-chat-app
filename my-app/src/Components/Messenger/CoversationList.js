import React from 'react'
import Conversation from './Conversation'
import photo from '../../image/photo.jpg'
import addUser from '../../image/addUser.png'

class ConversationList extends React.Component {
  // constructor (props) {
  //   super(this)
  //   this.state = {
  //     conversationList = [
  //       {
  //         profileImg={photo}
  //           userName='React Group'
  //           latestMessage='hi everybody hi everybody hi e'
  //           time='12:35'
  //           unReadMsg='100000000'
  //       }
  //     ]
  //   }

  // }

  render () {
    console.log(this.props.profileUrl)
    return (
      <div className='conversationList-box-outer'>
        <div className='add-contact'>
          <img
            className='add-user-icon'
            src={addUser}
          />
        </div>
        <div className='conversationList-box-inner'>

          {/* { this.state.conversationList.map( (Conversation, index) => {
            return (
              <Conversation
              key = {index}
              name = {conversation.profileImg}
              userName = {conversation.userName}
              latestMessage = {converation.latestMessage}
              />
            )
          } ) } */}

          <Conversation
            profileImg={photo}
            userName='React Group'
            latestMessage='hi eve everybody hi everybody hi e eve rybody hi erybody hi everybody hi e every'
            time='12:35'
            unReadMsg='100000000'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage=' سلام به همه اعضای محترم گروه سلام به همه اعضای محترم گروه '
            time='12:35'
            unReadMsg='5'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
          <Conversation
            profileUrl={photo}
            userName='React Group'
            latestMessage='hi everybody'
            time='12:35'
            unReadMsg='10'
          />
        </div>
      </div>
    )
  }
}

export default ConversationList
