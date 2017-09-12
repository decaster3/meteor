import React, { Component } from 'react'
import MainFirstPage from '../mainPage/components/MainFirstPage'
import MainComponent from '../firstPage/components/MainComponent'
import SignUpComponent from '../auth/components/SignUpComponent'
import SignInComponent from '../auth/components/SignInComponent'
import ProfileComponent from '../profile/ProfileComponent'
import PrivateRoute from './PrivateRoute'
import Protected from './Protected'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
      var loggedIn = true;
      return (
        <BrowserRouter >
          <Switch>
            <Route exact path='/' component={MainComponent} />
            <Route path='/menu' component={MainFirstPage} />
            <Route path='/sign_in' component={SignInComponent} firebase={this.props.firebase} />
            <Route path='/sign_up' component={SignUpComponent} firebase={this.props.firebase} />

            <Route path="/profile" render={() => (
              loggedIn ? (
                <Redirect to={{
                    pathname: '/sign_in',
                    state: { from: "/profile" }
                  }}/>
              ) : (
                <ProfileComponent/>
              )
            )}/>
            <PrivateRoute path="/protected" component={Protected}/>
          </Switch>
        </BrowserRouter>
      );
  }
}

export default App
