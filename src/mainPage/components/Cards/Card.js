import React, { Component } from 'react'

class Card extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  render () {
      return (
        <div className="card-deck col-md-3 my-card" key={this.props.key}>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={this.props.card.img}/>
            <div className="card-body">
              <div>
              <h4 className="card-title">{this.props.card.name}</h4>
              <h6 className="card-text">{this.props.card.description}</h6>
              </div>
              <div>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                      <span className="glyphicon glyphicon-minus"></span>
                    </button>
                  </span>
                  <input type="text" name="quant[2]" className="form-control input-number" defaultValue="10" min="1" max="100"/>
                  <span className="input-group-btn">
                      <button type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                          <span className="glyphicon glyphicon-plus"></span>
                      </button>
                  </span>
                </div>
              </div>
              <a href="#" className="btn btn-primary btn-block">Заказать</a>

            </div>
          </div>
        </div>
      );

  }
}
export default Card
