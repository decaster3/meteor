import React, { Component } from 'react'
import { Link } from 'react-router'
import mainStyle from '../assets/main.css'
import NavBar from '../../shared/components/NavBar'
import Footer from '../../shared/components/Footer'
// import BackgroundCanvas from './BackgroundCanvas'
import Header from './MainHeader'
import MainContent from './MainContent'

class MainComponent extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <NavBar/>
                <Header/>
                <MainContent firebase={this.props.route.firebase} />

                <Footer/>
            </div>
        );
    }
}
export default MainComponent;
