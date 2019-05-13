import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <textarea className='text' placeholder='Write a Message' />
        <FontAwesomeIcon icon='faHome' className='fas fa-camera fa-10x' />
      </footer>
    )
  }
}

export default Footer
