import React from 'react'
import SendedMessage from './SendedMessage'
import RecivedMessage from './RecivedMessages'
import Header from './header'
import Footer from './footer'

class Chat extends React.Component {
  render () {
    return (
      <div className='chat-box-outer'>
        <Header />
        <div className='chat-box-inner'>
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
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Chat
