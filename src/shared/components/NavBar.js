import React, {Component} from 'react'
import { Link } from 'react-router'
import navStyle from '../assets/navbar.css'
import all from '../assets/navbar.js'

export default class NavBar extends Component {
  render () {
      return (
      	<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">Метеор</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/menu'>Меню</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/sign_in'>Войти</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/sign_up'>Зарегистрироваться</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      );
  }
}