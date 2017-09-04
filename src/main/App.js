import React, { Component } from 'react'
import MainFirstPage from '../mainPage/components/MainFirstPage'
import MainComponent from '../firstPage/components/MainComponent'
import SignUpComponent from '../auth/components/SignUpComponent'
import SignInComponent from '../auth/components/SignInComponent'
import { Router, Route, browserHistory } from 'react-router'
class App extends Component{

  render(){
      return (
        <Router history={browserHistory}>
          <Route path='/' component={MainComponent} />
          <Route path='/menu' component={MainFirstPage} />
          <Route path='/sign_up' component={SignUpComponent} />
          <Route path='/sign_in' component={SignInComponent} />
        </Router>
      );
  }
}

export default App
