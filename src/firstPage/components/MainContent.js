import React, { Component } from 'react'
import { Link } from 'react-router'
import Card from './MainCard'
import '../assets/main_menu.css'
import { Carousel } from 'react-responsive-carousel';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class MainContent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            cards: []
        }

        this.loadCards.bind(this)
    }

    componentDidMount() {
        this.loadCards()
    }

    loadCards() {
        const cardsRef = this.props.firebase.database().ref().child('products')
        const responseRef = cardsRef.on('value', snapshot => {
            var cards = [];
            console.log(snapshot);
            snapshot.forEach(function(childSnapshot) {
                cards.push(childSnapshot.val());
            });
            this.setState({
                cards: cards
            });
        });
    }

    // mapCards() {
    //     const cards = this.state.cards.map((card, index) => {
    //         return ( <Card card = {card} key = {index} />);
    //     });
    //     return cards;
    // }

    render () {
        const cards = this.state.cards.map((card, index) => {
            return ( <Card card = {card} key = {index} />
                    );
        });

        return (
                <div className ="container">
                    <span className="centered-text">Космическое меню</span>
                    <hr className = "divider"></hr>
                    <Carousel  showArrows  autoPlay showStatus={false}>
                        <div className="card-deck row justify-content-center">
                            {cards}{cards}{cards}{cards}
                        </div>
                    </Carousel>
                </div>
        );
    }
}
export default MainContent;
