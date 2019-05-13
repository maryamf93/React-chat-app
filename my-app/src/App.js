import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Forms/Login'
import SignUp from './Components/Forms/SignUp'
import Messenger from './Components/Messenger/Messenger'
import EditProfile from './Components/Forms/EditProfile'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/signup/' component={SignUp} />
        <Route path='/editProfile/' component={EditProfile} />
        <Route path='/messenger/' component={Messenger} />
      </Router>
    )
  }
}

export default App
