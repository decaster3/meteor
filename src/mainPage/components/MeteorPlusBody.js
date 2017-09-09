import React, { Component } from 'react'

class MeteorPlusBody extends Component{

  render(){

      return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Что такое МЕТЕОР-coin?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Easy easy, real tolk, think about it!
                Это то что тебе нужно!
                Антихайп!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Круто, я всё понял!</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default MeteorPlusBody
