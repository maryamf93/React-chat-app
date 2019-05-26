import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Forms/Login'
import SignUp from './Components/Forms/SignUp'
import Messenger from './Components/Messenger/Messenger'
import CompleteProfile from './Components/Forms/CompleteProfile'
import conversation from './reducer/conversation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(conversation)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/signup/' component={SignUp} />
          <Route path='/completeProfile/' component={CompleteProfile} />
          <Route path='/messenger/' component={Messenger} />
        </Router>
        {/* <Login /> */}
      </Provider>
    )
  }
}

export default App
