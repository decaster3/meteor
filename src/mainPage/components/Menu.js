import React, { Component } from 'react'
import * as firebase from 'firebase';
import Cards from './Cards/Cards'

class Menu extends Component {
  constructor(){
    super();
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

      console.log(products);

      this.setState({
        cards: products
      });
    });

    // var cards = [{
    //       img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
    //       name: "Национальная",
    //       description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ",
    //       category : "пицца",
    //       dought : "thin",
    //       sizes : {
    //         size1 : {
    //           cost : 400,
    //           radius : 32
    //         },
    //         size2 : {
    //           cost : 450,
    //           radius : 42
    //         }
    //       },
    //       weight : 480
    //     },
    //     {
    //       alt : "Национальная",
    //       category : "пицца",
    //       img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
    //       name: "Национальная2",
    //       description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
    //     },
    //     {
    //       alt : "Национальная",
    //       category : "пицца",
    //       img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
    //       name: "Национальная3",
    //       description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
    //     },
    //     {
    //       alt : "Национальная",
    //       category : "вегитарианская",
    //       img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
    //       name: "Национальная4",
    //       description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
    //     },
    //     {
    //       alt : "Национальная",
    //       category : "WOK",
    //       img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
    //       name: "Национальная",
    //       description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
    //     },
    //   ]

    // this.setState({
      // cards: cards
    // })
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
