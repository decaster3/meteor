import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../assets/BackgroundCanvas/demo.css';
import '../assets/BackgroundCanvas/component.css';
import {foo}  from '../assets/BackgroundCanvas/demo1.js';
import '../assets/BackgroundCanvas/EasePack.min.js';
import '../assets/BackgroundCanvas/TweenLite.min.js';
import '../assets/BackgroundCanvas/rAF.js';
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

              <img onClick={this.drop} data-toggle="dropdown" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" className="person img-thumbnail rounded-circle"/>
              <div className="dropdown-menu ">
                <h6 className="dropdown-header">Mister Bin</h6>
                <a className="dropdown-item" href="#">Профиль</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
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
