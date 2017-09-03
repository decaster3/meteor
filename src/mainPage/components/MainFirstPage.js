import React, { Component } from 'react'
import NavBar from './NavBar.js'
import BackgroundCanvas from './BackgroundCanvas.js'
import CategoryMenu from './CategoryMenu.js'
class MainFirstPage extends Component {
  render () {
      return (
        <div>
              <NavBar/>
              <BackgroundCanvas/>
              <CategoryMenu/>
        </div>
      );

  }
}
export default MainFirstPage
