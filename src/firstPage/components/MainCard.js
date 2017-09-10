import React, {Component} from 'react'
import '../assets/main_card.css'
import pizza from '../assets/pizza-sm.jpg'

class Card extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
    
  	}

	render () {
		return (
			<div key={this.props.key} className="product-card">
				<div className="product-card__image">
					<img src={pizza}/>
				</div>
				<div className="product-card__title  legend">
					{this.props.card.name}
				</div>
			</div>
		);
	}
}
export default Card;