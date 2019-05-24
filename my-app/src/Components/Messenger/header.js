import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <img className='pro-img-box'
          src={this.props.avatar}
        />
        <h4 className='contact-name'>
          {this.props.user}
        </h4>
      </header>
    )
  }
}

export default Header
