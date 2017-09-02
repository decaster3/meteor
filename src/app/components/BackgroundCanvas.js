import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import js1 from '../assets/BackgroundCanvas/demo.css'
import js2 from '../assets/BackgroundCanvas/component.css'
import {foo}  from '../assets/BackgroundCanvas/demo1.js'
import js5 from '../assets/BackgroundCanvas/EasePack.min.js'
import js3 from '../assets/BackgroundCanvas/TweenLite.min.js'
import js4 from '../assets/BackgroundCanvas/rAF.js'

class BackgroundCanvas extends Component {
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
    					<h1 className="main-title">600 <span className="thin">метеоров</span></h1>
    				</div>
    			</div>
		    </div>
      );

  }
}
export default BackgroundCanvas
