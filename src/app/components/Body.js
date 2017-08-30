import React, { Component } from 'react'
import Footer from './Footer'
import Cards from '../../card/Cards'

class Body extends Component {
  render () {
      var cards = [{
          alt : "Национальная",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          title: "Национальная",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          title: "Национальная2",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          title: "Национальная3",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          title: "Национальная4",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          title: "Национальная",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
      ]
      return <Cards cards = {cards}/>;

  }
}
export default Body
