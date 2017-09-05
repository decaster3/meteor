import React, { Component } from 'react'
import headerStyle from '../assets/header.css'
import overrideBootstrap from '../assets/override_bootstrap.css'
import pizza from '../assets/pizza-sm.png'

export default class Header extends Component {
  render () {
      return (
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="col-md-10 row-wraper">
                <div className="site-heading col-md-7">
                  <h1>Метеор пицца</h1>
                  <button className="btn btn-danger subheading">Начать</button>
                </div>
                <span className="heading-logo col-md-3">
                  <img src={pizza} className="img-responsive img-heading"/>
                </span>
              </div>
            </div>
          </div>
        </header>
      );

  }
}
