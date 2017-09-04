import React, { Component } from 'react'
import { Link } from 'react-router';

class MainComponent extends Component {
  render () {
      return (
        <div>
             <Link to='/menu'>Меню</Link>
             <Link to='/sign_up'>Аутентификация</Link>
        </div>
      );

  }
}
export default MainComponent
