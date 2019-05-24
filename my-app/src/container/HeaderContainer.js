import { connect } from 'react-redux'
import Header from '../Components/Messenger/header'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => ({
  user: state.user,
  avatar: state.avatar
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
