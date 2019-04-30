import React from 'react';
import logo from '../../logo.svg';

class Conversation extends React.Component {
    render() {
        return(
            <div className='conversation-box'>
                <span className='span-pro-img'>
                    <img className='profile-img' src={logo} />
                    
                </span>

            </div>
        );
    }
}

export default Conversation;