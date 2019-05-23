import React from 'react'
import Conversation from './Conversation'
import profile from '../../image/profile.png'
import search from '../../image/search.png'
import addUser from '../../image/addUser.png'
import axios from 'axios'
import { saveConversationList } from '../../Action/conversation'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: [],
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  componentDidMount () {
    const token = this.state.token
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

  onChange (event) {
    // let data = {
    //   token: this.state.token,
    //   query: event.target.value,
    //   size: 4
    // }
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', event.target.value)
    fdata.append('size', 4)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then(response => {
        console.log('response...', response)
        this.setState({ suggestedUsers: response.data.data.users })
      })
      .catch(error => {
        console.log('error...', error)
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
            onClick={this.handleOpenModal}
          />

          <ReactModal
            isOpen={this.state.showModal}
            contentLabel='Minimal Modal Example'
          //  onRequestClose={this.handleCloseModal}
            // className='Modal'
            // overlayClassName='Overlay'
          >
            <button onClick={this.handleCloseModal}> Close </button>
            <div div className='input-box'>
              <img
                className='material-icons search-icon'
                src={search}
                onClick={this.handleOpenModal}
              />
              <input
                className='input-box-inner'
                // className='search'
                placeholder='search conversation...'
                onChange={(event) => this.onChange(event)}
              />

            </div>
            { this.state.suggestedUsers.map((user, index) => {
              return (
                <p className='suggest'><img src={user.avatar_url} className='suggestedAvatar'/> {user.email}</p>
              )
            }
            )}
          </ReactModal>

        </div>
        <div className='conversationList-box-inner'>
          { this.props.conversationList.map((conversation, index) => {
            console.log('......', this.state.myId)
            return (
              conversation.users.map((user, idx) => {
                if (user.id !== this.state.myId) {
                  return (
                    <Conversation
                      key={index}
                      profileImg={user.avatar_url}
                      userName={user.name}
                      latestMessage={conversation.latest_message}
                      time={conversation.latest_message_date}
                      unReadMsg={conversation.unReadMsg}
                    />
                  )
                }
              })
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default ConversationList
