import React from 'react'
import { render } from 'react-dom'
import App from '../src/main/App'
import * as firebase from 'firebase'
import WebFont from 'webfontloader';
import './assets/Harabara_Bold/font.css'

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

var config = {
  apiKey: "AIzaSyBMMIBgH5d_kJd5f2y9FgyJDWTsqbNOmAk",
  authDomain: "meteor-764bf.firebaseapp.com",
  databaseURL: "https://meteor-764bf.firebaseio.com",
  projectId: "meteor-764bf",
  storageBucket: "meteor-764bf.appspot.com",
  messagingSenderId: "560068246876"
};

firebase.initializeApp(config);



render(
  <App firebase = {firebase} />,
  document.getElementById('app')
)
