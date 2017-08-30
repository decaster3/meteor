import React from 'react'
import { render } from 'react-dom'
import App from '../src/main/App'

firebase.initializeApp(config);

render(
  <App/>,
  document.getElementById('app')
)
