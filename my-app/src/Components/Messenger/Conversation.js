import React from 'react'
import pro from '../../photo.jpg'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation-box'>
        <div className='pro-img-box'>
          <img className = 'pro-img-box' src={pro} />
        </div>
        <div className='left-div-conv'>
          <h4>
            React Group
          </h4>
          <p>
            hi every body
          </p>
        </div>
        <div className='right-div-conv'>
          <span />
        </div>
      </div>
    )
  }
}

export default Conversation
