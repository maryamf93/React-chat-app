import React from 'react'
import Conversation from './Conversation'
import profile from '../../image/profile.png'
import addUser from '../../image/addUser.png'
import axios from 'axios'
import { saveConversationList } from '../../Action/conversation'

class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id')
    }
  }

  componentDidMount () {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then(response => {
        console.log('this:::::', this)
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      // conversation_details is an array
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    console.log(this.props)
    return (
      <div className='conversationList-box-outer'>
        <div className='add-contact'>
          <img
            className='add-user-icon'
            src={addUser}
          />
        </div>
        <div className='conversationList-box-inner'>

          { this.props.conversationList.map((conversation, index) => {
            conversation.users.map((user, idx) => {
              if (user.id != this.state.myId) {
                return (
                  <Conversation
                    key={index}
                    profileImg={profile}
                    userName={user.name}
                    latestMessage={conversation.latest_message}
                    time={conversation.latest_message_date}
                    unReadMsg={conversation.unReadMsg}
                  />
                )
              }
            })
          })
          }
        </div>
      </div>
    )
  }
}

export default ConversationList
