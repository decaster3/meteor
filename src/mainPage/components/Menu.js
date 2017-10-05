import React, { Component } from 'react'
import * as firebase from 'firebase';
import Cards from './Cards/Cards'

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
  }
  componentDidMount(){
    const rootRef = firebase.database().ref().child('products');
    const namePizzaRef = rootRef.on('value', snapshot => {
      var products = [];
      snapshot.forEach(function(childSnapshot) {
          products.push(childSnapshot.val());
      });

      this.setState({
        cards: products
      });
    });

  }

  render () {

      return (
        <div>
              <Cards cards = {this.state.cards} currentCategory={this.props.currentCategory}/>
        </div>
      );

  }
}
export default Menu
