import React, { Component } from 'react'
import NavBar from '../mainPage/components/NavBar.js'
import BackgroundCanvas from '../mainPage/components/BackgroundCanvas.js'

class ProfileComponent extends Component {

  render () {
      console.log("profile");
      
      return (
        <div>
              <NavBar/>
              <BackgroundCanvas />
              <h1>Profile</h1>
        </div>
      );

  }
}
export default ProfileComponent
