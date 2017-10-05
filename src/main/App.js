import React, { Component } from 'react';
import MainFirstPage from '../mainPage/components/MainFirstPage';
import MainComponent from '../firstPage/components/MainComponent';
import SignUpComponent from '../auth/components/SignUpComponent';
import SignInComponent from '../auth/components/SignInComponent';
import ProfileComponent from '../profile/ProfileComponent';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import * as firebase from 'firebase';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      users: {}
    }
  }

  componentDidMount() {

    //API GET EXAMPLE

    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));

  }

  render(){
      var loggedIn = true; //firebase.auth().currentUser != null;
      return (
        <BrowserRouter >
          <Switch>
            <Route exact path='/' component={MainComponent} />
            <Route path='/menu' component={MainFirstPage} />
            <Route path="/sign_in" render={() => (loggedIn ? (<Redirect to="/menu"/>) : (<SignInComponent/>))}/>
            <Route path="/sign_up" render={() => (!loggedIn ? (<Redirect to="/menu"/>) : (<SignUpComponent/>))}/>
            <Route path="/profile" render={() => (
              !loggedIn ? (
                <Redirect to={{
                    pathname: '/sign_in',
                    state: {
                      from: "/profile"
                    }
                  }}/>
              ) : (
                <ProfileComponent/>
              )
            )}/>

          </Switch>
        </BrowserRouter>
      );
  }
}

export default App
