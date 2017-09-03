import React, { Component } from 'react'
import * as firebase from 'firebase';

class Menu extends Component {
  constructor(){
    super();
    this.state = {
      pizza: 'chertovka'
    }
  }
  componentDidMount(){
    const rootRef = firebase.database().ref().child('pizzas');
    const namePizzaRef = rootRef.on('value', snap => {
      this.setState({
        pizza: snap.val().name
      });
    });
  }

  render () {
      return (
        <div>
              <h1>Heu {this.state.pizza}</h1>
        </div>
      );

  }
}
export default Menu
