import React from 'react'
import SendedMessage from './SendedMessage'
import RecivedMessage from './RecivedMessages'

class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      myId: window.localStorage.getItem('id')
    }
  }

  render () {
    return (
      <div className='chat-box-inner'>
        { this.props.messages.map((item, index) => {
          if (item.sender.id.toString() === this.state.myId) {
            return (
              <SendedMessage
                sendedMsg={item.text}
              />
            )
          } else {
            return (
              <RecivedMessage
                recivedMsg={item.text}
              />
            )
          }
        })
        }
      </div>
    )
  }
}

export default ChatScreen
