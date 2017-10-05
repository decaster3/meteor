import React, { Component } from 'react'
import NavBar from '../mainPage/components/NavBar.js'
import BackgroundCanvas from '../mainPage/components/BackgroundCanvas.js'
import ProfileData from './ProfileData.js'

class ProfileComponent extends Component {
  constructor(props){
    super(props);
  }

  render () {

      return (
        <div>
              <NavBar/>
              <BackgroundCanvas />
              <ProfileData/>
        </div>
      );

  }
}
export default ProfileComponent
