import React, { Component } from 'react'
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { signOut } from './SignInComponent.js'

import { Route, Redirect, browserHistory} from 'react-router';

class SignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      pass: '',
      passRepeat: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.checkUserAuth = this.checkUserAuth.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
    });
    //email verification
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
        user.sendEmailVerification();
    });

    //redirect to menu
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          browserHistory.push('/menu');
      }
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
               <input name="email" type = "text" value = {this.state.email} onChange = {this.handleChange}/>
            </label>

            <label>
              Passwprd:
               <input name= "pass" type = "password" value = {this.state.pass} onChange = {this.handleChange}/>
            </label>

            <label>
              Passwprd repeat:
               <input name = "passRepeat" type = "password" value = {this.state.passRepeat} onChange = {this.handleChange}/>
            </label>
            <input type = "Submit" value = "Submit"/>
          </form>
          <Link to = "/sign_in">Войти</Link>
        </div>
      );

  }
}
export default SignUpComponent
