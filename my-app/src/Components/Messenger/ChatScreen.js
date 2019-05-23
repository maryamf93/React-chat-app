import React from 'react'
import SendedMessage from './SendedMessage'
import RecivedMessage from './RecivedMessages'

class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='chatttt'>
        <div className='chat-box-inner'>
          { this.props.messages.map((item, index) => {
            if (item.id === 1) {
              return (
                <SendedMessage
                  sendedMsg={item.message}
                />
              )
            } else {
              return (
                <RecivedMessage
                  recivedMsg={item.message}
                />
              )
            }
          })
          }
        </div>
      </div>
    )
  }
}

export default ChatScreen
