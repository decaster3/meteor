import React, { Component } from 'react'
import js1 from '../assets/BackgroundCanvas/demo.css'
import js2 from '../assets/BackgroundCanvas/component.css'
import {initCategoryFunction} from '../assets/CategoryMenu/categorumenu.js'
import Menu from './Menu.js'

class CategoryMenu extends Component {

  constructor(props){
    super(props)
    this.state = {
      categories: {},
      currentCategory: {}
    };

    this.initCategories.bind(this);
  }

  componentDidMount(){
    initCategoryFunction(this);
    this.initCategories();
  }

  initCategories() {
    var allCategories = {
        "category-all" : ["пицца", "сет", "WOK"],
        "category-pizza" : ["пицца"],
        "category-set" : ["сет"],
        "category-wok" : ["WOK"]
    };
    var currentCategory = allCategories["category-all"];

    this.setState({
      categories: allCategories,
      currentCategory: currentCategory
    })
  }

  render () {
      return (
        <div>
          <div className="categories d-flex justify-content-center">
            <img className="img-circle" id="category-all" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
            <img className="img-circle" id="category-pizza" src="http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32" width="100" height="100" />
            <img className="img-circle" id="category-set" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
            <img className="img-circle" id="category-wok" src="http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32" width="100" height="100" />
          </div>
          <Menu currentCategory={this.state.currentCategory}/>
        </div>
      );

  }
}
export default CategoryMenu
