import React, { Component } from 'react'
import NavBar from '../../shared/components/NavBar'
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
