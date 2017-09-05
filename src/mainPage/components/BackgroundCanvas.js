import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../assets/BackgroundCanvas/demo.css'
import '../assets/BackgroundCanvas/component.css'
import {foo}  from '../assets/BackgroundCanvas/demo1.js'
import '../assets/BackgroundCanvas/EasePack.min.js'
import '../assets/BackgroundCanvas/TweenLite.min.js'
import '../assets/BackgroundCanvas/rAF.js'

class BackgroundCanvas extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    foo(1);
  }

  render () {
      return (
        <div className="demo-1">
     			<div className="content">
    				<div id="large-header" className="large-header">
    					<canvas id="demo-canvas"></canvas>
    					<h2 className="logo">Лого</h2>
    					<h2 className="person">Личный кабинет</h2>
    					<h2 className="cart">Корзина</h2>
    					<h1 className="main-title">
                <span className="very-big-text">600</span>
                <span className="thin">метеоров</span>
              </h1>
              <button type="button" className="btn btn-circle btn-outline-light btn-xl canvas-button">
                  <span className="glyphicon glyphicon-plus"></span>
              </button>

            </div>
    			</div>

        </div>
      );

  }
}
export default BackgroundCanvas
