import { connect } from 'react-redux'
import ChatScreen from '../Components/Messenger/ChatScreen'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  newMessage: state.newMessage,
  messages: state.messages
})

const ChatScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen)

export default ChatScreenContainer
