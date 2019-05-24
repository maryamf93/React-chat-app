import { connect } from 'react-redux'
import Conversation from '../Components/Messenger/Conversation'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ConversationContainer = connect(
  mapDispatchToProps
)(Conversation)

export default ConversationContainer
