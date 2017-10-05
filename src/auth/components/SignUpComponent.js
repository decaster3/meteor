import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import * as firebase from 'firebase';

class SignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      pass: '',
      passRepeat: '',
      phoneNumber: '',
      phoneNumberVerificationCode: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addRef = this.addRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendPhoneVerificationCode = this.sendPhoneVerificationCode.bind(this);

    const { from } = this.props.location.state || { from: { pathname: '/menu' } }
    this.from = from
    // this.checkUserAuth = this.checkUserAuth.bind(this);
  }
  //+79520335877
  componentDidMount(){
    // console.log(this.props.match.params.testvalue);


    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('submitForm', {
      'size': 'invisible',
      'callback': function(response) {
        console.log("recaptcha was created");
      }
    });
  }

  addRef() {
    var data = {}

    const queryString = require('query-string');
    const params = queryString.parse(this.props.location.search);
    const parent = params.ref
    if (parent)
      data["parent"] = parent

    data["key"] = "New_user_key"; //firebase.auth().currentUser.uid;

    const url = '/api/newReferral';

    axios.post(url, data)
    .catch(error => {
      console.log(error);
    });

  }

  handleSubmit(event){
    this.addRef();
    event.preventDefault();
    // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
    //   var errorCode = error.code;
    //   console.log(errorCode);
    //   var errorMessage = error.message;
    //   console.log(errorMessage);
    // });
    // //email verification
    // var user = firebase.auth().currentUser;
    // firebase.auth().onAuthStateChanged(function(user) {
    //     user.sendEmailVerification();
    // });
    //
    // //redirect to menu
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //       <Redirect to="/menu"/>;
    //   }
    //   console.log("registr failed");
    // });
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  sendPhoneVerificationCode(){
    var phoneNumber = this.state.phoneNumber;
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      console.log("sms was send");
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      console.log(error);
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
              Phone number:
               <input name = "phoneNumber" type = "text" defaultValue = {this.state.phoneNumber} onChange = {this.handleChange}/>
            </label>

            <button onClick = {this.sendPhoneVerificationCode}>Send sms to phone</button>


            <label>
              Phone number verification code:
               <input name = "phoneNumberVerificationCode" type = "text" defaultValue = {this.state.phoneNumberVerificationCode} onChange = {this.handleChange}/>
            </label>
            <div id = "submitForm"></div>

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
          <Link to = "/sign_in">Войти</Link>
        </div>
      );

  }
}
export default withRouter(SignUpComponent)
