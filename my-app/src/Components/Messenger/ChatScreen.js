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

        {/* <RecivedMessage
          recivedMsg='what s up?'
        />
        <SendedMessage
          sendedMsg='Text is available under the Creative Commons Attribution;
            additional terms may apply.'
        />
        <RecivedMessage
          recivedMsg='hello how are you'
        />
        <SendedMessage
          sendedMsg='hi fine thank you'
        />
        <SendedMessage
          sendedMsg='hi fine thank you'
        />
        <RecivedMessage
          recivedMsg='hello how are you'
        />
        <SendedMessage
          sendedMsg='hi fine thank you'
        />
        <RecivedMessage
          recivedMsg='what s up?'
        />
        <SendedMessage
          sendedMsg='Text is available under the Creative Commons Attribution;
            additional terms may apply.'
        />
        <RecivedMessage
          recivedMsg='hello how are you'
        />
        <SendedMessage
          sendedMsg='hi fine thank you'
        />
        <SendedMessage
          sendedMsg='hi fine thank you'
        />
        <RecivedMessage
          recivedMsg='what s up?'
        />
        <SendedMessage
          sendedMsg='Text is available under the Creative Commons Attribution;
            additional terms may apply.'
        />
        <RecivedMessage
          recivedMsg='hello how are you'
        />
        <SendedMessage
          sendedMsg='hi fine thank you'
        /> */}
      </div>
    )
  }
}

export default ChatScreen
