import { connect } from 'react-redux'
import ConversationList from '../Components/Messenger/CoversationList'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  conversationList: state.conversationList
})

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default ConversationListContainer
