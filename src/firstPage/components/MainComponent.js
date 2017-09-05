import React, { Component } from 'react'
import { Link } from 'react-router'
import mainStyle from '../assets/main.css'
import NavBar from '../../shared/components/NavBar'
import Header from './Header'

class MainComponent extends Component {
  render () {
      return (
        <div>
        	<NavBar/>
            <Header/>
        </div>
      );
  }
}
export default MainComponent;
