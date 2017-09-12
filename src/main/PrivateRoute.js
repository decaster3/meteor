import React, { Component } from 'react'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

class PrivateRoute extends Component{

  constructor(props){
    super(props);
  }

  render(){
       var loggedIn = true;
       const { from } = this.props.location.state || { from: { pathname: '/' } }

        return (
          <Route
            {...this.props}
            component={Component}
            render={props =>
              (loggedIn ? (<props.component {...props} />) :
              (<Redirect
                  to={{
                    pathname: '/sign_in',
                    state: {from: this.props.location
                    }}}
                />))}
            />)

  }
}

export default PrivateRoute
