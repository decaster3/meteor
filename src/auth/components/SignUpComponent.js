import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom';

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
    this.handleChange = this.handleChange.bind(this);
    this.sendPhoneVerificationCode = this.sendPhoneVerificationCode.bind(this);
    // this.checkUserAuth = this.checkUserAuth.bind(this);
  }
  //+79520335877
  componentDidMount(){
    window.recaptchaVerifier = new this.props.route.firebase.auth.RecaptchaVerifier('submitForm', {
  'size': 'invisible',
  'callback': function(response) {
    console.log("recaptcha was created");
  }
});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.route.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(function(error) {
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
    });
    //email verification
    var user = this.props.route.firebase.auth().currentUser;
    this.props.route.firebase.auth().onAuthStateChanged(function(user) {
        user.sendEmailVerification();
    });

    //redirect to menu
    this.props.route.firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          <Redirect push to="/menu"/>;
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

  sendPhoneVerificationCode(){
    var phoneNumber = this.state.phoneNumber;
    var appVerifier = window.recaptchaVerifier;
    this.props.route.firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
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
              Passwprd repeat:
               <input name = "passRepeat" type = "password" defaultValue = {this.state.passRepeat} onChange = {this.handleChange}/>
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
          <Link to = "/sign_in">Войти</Link>
        </div>
      );

  }
}
export default SignUpComponent
