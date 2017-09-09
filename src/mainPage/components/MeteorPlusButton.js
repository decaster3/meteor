import React, { Component } from 'react'

class MeteorPlusInfoButton extends Component{

  render(){
      return (
          <button type="button" className="btn btn-outline-light canvas-button" data-toggle="modal" data-target="#exampleModal">
              <span className="btn-text">+</span>
          </button>
      );
  }
}

export default MeteorPlusInfoButton
