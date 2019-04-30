import React from 'react';
import ConversationList from './CoversationList';
import Chat from './Chat';

class Messenger extends React.Component {
    render() {
        return(
            <div>
                <ConversationList />
                <Chat />
            </div>
        );
    }
}

export default Messenger;