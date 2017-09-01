import React from 'react'
import { render } from 'react-dom'
import App from '../src/main/App'
import '../assets/js/TweenLite.min.js'
import '../assets/js/EasePack.min.js'
import '../assets/js/rAF.js'
import '../assets/js/demo1.js'
import '../assets/css/normalize.css'
import '../assets/css/demo.css'
import '../assets/css/component.css'

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
  <App/>,
  document.getElementById('app')
)
