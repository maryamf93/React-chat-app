import { connect } from 'react-redux'
import Footer from '../Components/Messenger/footer'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  conversationId: state.conversationId
})


const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
