import React, { Component } from 'react'

class Card extends Component {

  constructor(props){
    super(props);
  }

  render () {
      return (
        <div className="card-deck col-md-3 my-card" key={this.props.key}>
          <div className="card text-white bg-dark">
            <img className="card-img-top" alt={this.props.card.alt} src={this.props.card.img}/>
            <div className="card-body">
              <h4 className="card-title">{this.props.card.title}</h4>
              <p className="card-text">{this.props.card.description}</p>
              <a href="#" className="btn btn-primary">buy</a>
            </div>
          </div>
        </div>
      );

  }
}
export default Card
