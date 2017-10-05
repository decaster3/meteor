import React, { Component } from 'react'
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';

class ProfileData extends Component {
  constructor(props){
    super(props);
    this.getHash = this.getHash.bind(this);
    var key = firebase.auth().currentUser != null ? firebase.auth().currentUser.uid : "Some_key"
    this.state = {
      link: "",
      key: key
    };
  }

  componentDidMount(){
    const userRef = firebase.database().ref().child('users');

    userRef.child(this.state.key).on('value', snapshot => {

      this.setState({
        user: snapshot.val()
      });

      console.log(this.state.user);
    });
  }

  getHash() {
    const userRef = firebase.database().ref().child('users');

    userRef.child(this.state.key).on('value', snapshot => {
      var { referalCode } =  snapshot.val()
      referalCode = '/sign_up?ref=' + referalCode
      this.setState({
        link: referalCode
      });
    });

  }
  render () {
      console.log(this.state.link);
      return (
        <div>
              <h1>Profile</h1>
              <button onClick={this.getHash} type="button" className="btn btn-success">Приглаисть друга</button>
               <Link to={this.state.link} role="button" className="btn btn-info">Меню</Link>
              <br/>
              <h2>{this.state.link} </h2>
        </div>
      );

  }
}
export default ProfileData
