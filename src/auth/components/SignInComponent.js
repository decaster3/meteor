import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import {Redirect } from 'react-router-dom'
import {withRouter} from "react-router-dom";
import * as firebase from 'firebase';

import {Link} from 'react-router-dom';

class SignInComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      pass: '',
      passRepeat: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signOut = this.signOut.bind(this);
    const { from } = this.props.location.state || { from: { pathname: '/menu' } }
    this.from = from
  }

  componentDidMount(){
    const cookies = new Cookies();
    var start = {
      quantity: 0,
      name: ['']
    };
    cookies.set('cart', start, { path: '/' });
  }

  handleSubmit(event){
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          this.props.history.push(this.from);
      }
      console.log("auth failed");
    });
  }

  signOut(){
    firebase.auth().signOut().then(function() {
      console.log("Loged Out saccesfully");
    }).catch(function(error) {
      console.log(error);
    });
  }



  handleChange(event){
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  render () {

      return (
        <div>
          <form onSubmit = {this.handleSubmit}>

            <label>
              Email:
               <input name="email" type = "text" defaultValue = {this.state.email} onChange = {this.handleChange}/>
            </label>

            <label>
              Passwprd:
               <input name= "pass" type = "password" defaultValue = {this.state.pass} onChange = {this.handleChange}/>
            </label>

            <label>
              Passwprd repeat:
               <input name = "passRepeat" type = "password" defaultValue = {this.state.passRepeat} onChange = {this.handleChange}/>
            </label>

            <input type = "Submit" defaultValue = "Submit"/>

          </form>

          <Link to = 'sign_up'>Регистрация</Link>

          <button onClick = {this.signOut}>Выйти</button>
        </div>
      );

  }
}
export default withRouter (SignInComponent)
