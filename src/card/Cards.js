import React, { Component } from 'react'
import Card from './index'

class Cards extends Component {

  constructor(props){
    super(props);
  }

  render () {
      var categories = this.props.categories;
      // console.log(categories);
      const cards = this.props.cards.map((card, index) => {
        if (categories.includes(card.category))
          return <Card card={card} key = {index}/>});


      return (<div className ="container">
        <div className="card-deck row justify-content-center">{cards}</div>
        </div>)
  }
}
export default Cards
