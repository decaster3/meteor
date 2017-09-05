import React, { Component } from 'react'
import * as firebase from 'firebase';
import Cookies from 'universal-cookie';

import { Route, Redirect, browserHistory, Link} from 'react-router';

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
    this.getCoockies = this.getCoockies.bind(this);
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
          browserHistory.push('/menu')
      }
    });
  }
  getCoockies(){
    const cookiess = new Cookies();
    var cont = cookiess.get('cart');
    var contt = {
      quantity: cont.quantity + 1,
    };
    console.log(contt);
    cookiess.set('cart', contt, {path: '/'});
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

          <Link to = 'sign_up'>Регистрация</Link>

          <button onClick = {this.signOut}>Выйти</button>
          <button onClick = {this.getCoockies}>get coockies </button>
        </div>
      );

  }
}
export default SignInComponent
