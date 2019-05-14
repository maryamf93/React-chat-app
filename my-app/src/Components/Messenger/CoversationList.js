import React from 'react'
import Conversation from './Conversation'
import photo from '../../image/photo.jpg'
import addUser from '../../image/addUser.png'

class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [
        {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody hi everybody hi e eve rybody hi erybody hi everybody hi e every',
          time: '12:35',
          unReadMsg: '10000000'
        }, {
          profileUrl: { photo },
          userName: 'React Group',
          latestMessage: ' سلام به همه اعضای محترم گروه سلام به همه اعضای محترم گروه ',
          time: '12:35',
          unReadMsg: '5'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody hi',
          time: '12:35',
          unReadMsg: '260'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi',
          time: '12:35',
          unReadMsg: '8'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody hi everybody ',
          time: '12:35',
          unReadMsg: '1000'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody ',
          time: '12:35',
          unReadMsg: '6'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody hi ',
          time: '12:35',
          unReadMsg: '40'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody ',
          time: '12:35',
          unReadMsg: '10'
        }, {
          profileImg: { photo },
          userName: 'React Group',
          latestMessage: 'hi eve everybody ',
          time: '12:35',
          unReadMsg: '10'
        }

      ]
    }
  }

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

          { this.state.conversationList.map((conversation, index) => {
            return (
              <Conversation
                key={index}
                profileImg={photo}
                userName={conversation.userName}
                latestMessage={conversation.latestMessage}
                time={conversation.time}
                unReadMsg={conversation.unReadMsg}
              />
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default ConversationList
