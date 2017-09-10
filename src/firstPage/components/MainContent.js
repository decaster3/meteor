import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import Card from './MainCard'
import '../assets/main_menu.css'
// import carousel from '../assets/carousel.js'
//import { Carousel } from 'react-responsive-carousel';
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

    componentWillMount() {
        this.loadCards();
    }

    componentDidMount() {
        
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
        var cardsCounter = 0;
        var tripleCard = [];
        const cards = this.state.cards.map((card, index) => {
            cardsCounter++;
            console.log(" cards Conuter == " + this.state.cards.length);
            var style =  cardsCounter <= 3 ? "active item" : "item";
            tripleCard.push(<Card card = {card} key = {index}/>);
            if ((cardsCounter == this.state.cards.length) || ( cardsCounter % 3 === 0 )) {
                const temp = tripleCard.slice();
                console.log("triple = " + tripleCard.length);
                console.log("temp " + temp.length);
                tripleCard = [];
                console.log("triple = " + tripleCard);
                return ( <div className = {style}  key = {index}>  {temp} </div> );
            }
        });

        return (
                <div className ="container">
                    <span className="centered-text">Космическое меню</span>
                    <hr className = "divider"></hr>
                      <div className="row carousel-wraper">
                          <div className="carousel slide multi-item-carousel" id="theCarousel">
                            <div className="carousel-inner">
                                {cards}
                            </div>
                            <a className="left carousel-control" href="#theCarousel" data-slide="prev">
                                <i className="glyphicon glyphicon-chevron-left"></i>
                            </a>
                            <a className="right carousel-control" href="#theCarousel" data-slide="next">
                                <i className="glyphicon glyphicon-chevron-right"></i>
                            </a>
                          </div>
                    </div>
                </div>
        );
    }
}

import carouselJS from '../assets/carousel.js'
export default MainContent;
