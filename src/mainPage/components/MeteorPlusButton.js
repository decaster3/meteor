import React, { Component } from 'react'

class MeteorPlusInfoButton extends Component{

  render(){
      return (
          <button type="button" className="btn btn-circle btn-outline-light btn-xl canvas-button" data-toggle="modal" data-target="#exampleModal">
              <span className="glyphicon glyphicon-plus"></span>
          </button>
      );
  }
}

export default MeteorPlusInfoButton
