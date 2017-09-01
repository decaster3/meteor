import React, { Component } from 'react'
import Footer from './Footer'
import Cards from '../../card/Cards'

class Body extends Component {

  constructor(props){
    super(props)
    this.state = {
      categories: {
        "category-all" : ["пицца", "вегитарианская", "WOK"],
        "category-pizza" : ["пицца"],
        "category-rolls" : ["вегитарианская"],
        "category-wok" : ["WOK"]
      },
      currentCategories: ["пицца", "вегитарианская", "WOK"]
    };
  }

  componentDidMount(){

    var self2 = this;

    $(document).ready(function(){
      $("img").click(function() {
          var img = $(this);
          var id = img.attr('id');

          var changeCatgory = self2.state.categories[id];
          self2.setState({
            currentCategories: changeCatgory
          })
          console.log(self2.state.currentCategories);
          if (img.width() < 200)  {
              $(this).siblings().animate({width: "100px", height: "100px"}, 220)
              $(this).siblings().removeClass("img-selected");
              $(this).addClass("img-selected");
              img.animate({width: "200px", height: "200px"}, 220);

          }
        });
      });
  }

  render () {
      var cards = [{
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          name: "Национальная",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ",
          category : "пицца",
          dought : "thin",
          sizes : {
            size1 : {
              cost : 400,
              radius : 32
            },
            size2 : {
              cost : 450,
              radius : 42
            }
          },
          weight : 480
        },
        {
          alt : "Национальная",
          category : "пицца",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          name: "Национальная2",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          category : "пицца",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          name: "Национальная3",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          category : "вегитарианская",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          name: "Национальная4",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
        {
          alt : "Национальная",
          category : "WOK",
          img : "http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32",
          name: "Национальная",
          description: "ПИЦЦА-СОУС, СЫР МОЦАРЕЛЛА, КАЗЫ, ЧУЧУК, ЛУК РЕПЧАТЫЙ"
        },
      ]
      return <div>
        <div className="categories d-flex justify-content-center">
          <img className="img-circle" id="category-all" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
          <img className="img-circle" id="category-pizza" src="http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32" width="100" height="100" />
          <img className="img-circle" id="category-rolls" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
          <img className="img-circle" id="category-wok" src="http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32" width="100" height="100" />
        </div>
        <Cards cards = {cards} categories={this.state.currentCategories}/>
      </div>;

  }
}
export default Body
