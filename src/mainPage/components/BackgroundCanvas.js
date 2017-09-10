import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../assets/BackgroundCanvas/demo.css';
import '../assets/BackgroundCanvas/component.scss';
import {foo}  from '../assets/BackgroundCanvas/demo1.js';
import '../assets/BackgroundCanvas/EasePack.min.js';
import '../assets/BackgroundCanvas/TweenLite.min.js';
import '../assets/BackgroundCanvas/rAF.js';
import '../assets/Dropdown/dropdown.css';
import MeteorPlusBody from './MeteorPlusBody';
import MeteorPlusButton from './MeteorPlusButton';

class BackgroundCanvas extends Component {
  constructor(props){

    super(props)


    this.drop.bind(this);
  }

  componentDidMount(){
    foo(1);
  }


  drop(){
      console.log(  $('.dropdown-menu'));
      $('.dropdown-menu').dropdown()
  }

  render () {
      return (
        <div className="canvas-header">
     			<div className="content">
    				<div id="large-header" className="large-header">
    					<canvas id="demo-canvas"></canvas>

				      <h2 className="logo" >Лого</h2>

              <div className="dropdown person">
                <button className="dropbtn rounded-circle">Lc</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              <h2 className="cart">Корзина</h2>

    					<h1 className="main-title">
                <span className="meteor-count">600</span>
                метеоров
              </h1>

              <MeteorPlusButton/>

            </div>

    			</div>

          <MeteorPlusBody/>

        </div>
      );

  }
}
export default BackgroundCanvas
