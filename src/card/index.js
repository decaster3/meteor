import React, { Component } from 'react'

class Card extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('.btn-number').click(function(e){
    e.preventDefault();

    var fieldName = $(this).attr('data-field');
    var type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
    $('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
    $(".input-number").keydown(function (e) {
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
               // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) ||
               // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
                   // let it happen, don't do anything
                   return;
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      });
  }

  render () {
      return (
        <div className="card-deck col-md-3 my-card" key={this.props.key}>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={this.props.card.img}/>
            <div className="card-body">
              <div>
              <h4 className="card-title">{this.props.card.name}</h4>
              <h6 className="card-text">{this.props.card.description}</h6>
              </div>
              <div>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                      <span className="glyphicon glyphicon-minus"></span>
                    </button>
                  </span>
                  <input type="text" name="quant[2]" className="form-control input-number" defaultValue="10" min="1" max="100"/>
                  <span className="input-group-btn">
                      <button type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                          <span className="glyphicon glyphicon-plus"></span>
                      </button>
                  </span>
                </div>
              </div>
              <a href="#" className="btn btn-primary btn-block">Заказать</a>

            </div>
          </div>
        </div>
      );

  }
}
export default Card
