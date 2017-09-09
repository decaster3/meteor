import React, { Component, Image } from 'react'
import headerStyle from '../assets/header.css'
import overrideBootstrap from '../assets/override_bootstrap.css'
import pizza from '../assets/pizza-sm.jpg' 
import headerCollapse from '../assets/collapse.js'


class Header extends Component {
  render () {
      return (
        <header className="masthead">
          <div className="container">
            <div className="row row-wraper">
              <div className="site-heading">
                <h1>Метеор пицца</h1>
                <button className="btn btn-danger subheading">Начать</button>
              </div>
              <div className="logo-heading">
                <img src={pizza} className="img-responsive img-heading"/>
              </div>
            </div>
          </div>
        </header>

      );
  }
}

export default Header;