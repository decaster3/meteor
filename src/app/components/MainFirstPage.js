import React, { Component } from 'react'
import NavBar from './NavBar'
import BackgroundCanvas from './BackgroundCanvas.js'
class MainFirstPage extends Component {
  render () {
      return (
        <div>
              <NavBar/>
              <BackgroundCanvas/>
        </div>
      );

  }
}
export default MainFirstPage
