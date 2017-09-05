import React, { Component } from 'react'
import { Link } from 'react-router'
import mainStyle from '../assets/main.css'
import NavBar from '../../shared/components/NavBar'
import Footer from '../../shared/components/Footer'
import Header from './Header'

class MainComponent extends Component {
  render () {
      return (
        <div>
        	<NavBar/>
            <Header/>
          	<Footer/>
        </div>
      );
  }
}
export default MainComponent;
