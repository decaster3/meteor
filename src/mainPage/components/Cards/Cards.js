import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {

  constructor(props){
    super(props);
  }

  render () {
      var currentCategory = this.props.currentCategory;
      if (currentCategory == null)
        return;
      const cards = this.props.cards.map((card, index) => {
        if (currentCategory.includes(card.category))
          return <Card card={card} key = {index}/>
      });

      return (<div className ="container">
                <div className="card-deck row justify-content-center">{cards}</div>
              </div>)
  }
}
export default Cards
