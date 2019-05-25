import { connect } from 'react-redux'
import ChatScreen from '../Components/Messenger/ChatScreen'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  newMessage: state.newMessage,
  messages: state.messages,
  date: state.date
})

const ChatScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen)

export default ChatScreenContainer
