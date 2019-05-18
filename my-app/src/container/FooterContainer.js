import { connect } from 'react-redux'
import Footer from '../Components/Messenger/footer'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const FooterContainer = connect(
  mapDispatchToProps
)(Footer)

export default FooterContainer
