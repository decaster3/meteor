import React, { Component } from 'react'
import js1 from '../assets/BackgroundCanvas/demo.css'
import js2 from '../assets/BackgroundCanvas/component.css'
import {initCategoryFunction} from '../assets/CategoryMenu/categorumenu.js'
import Menu from './Menu.js'
import * as firebase from 'firebase';

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
    this.initCategories();
  }

  initCategories() {
    var categories = {};

    const rootRef = firebase.database().ref().child('categories');
    const namePizzaRef = rootRef.on('value', snapshot => {
      var allCategories = [];
      const prefix = "category-";
      categories[prefix + "all"] = [];

      snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var value = childSnapshot.val();

          categories[prefix + key] = value;
          allCategories = allCategories.concat(value);
      });

      categories[prefix + "all"] = (allCategories);
      var currentCategory = categories["category-all"];

      this.setState({
        categories: categories,
        currentCategory: currentCategory
      })
      initCategoryFunction(this);
    });
  }

  render () {
      var categories;
      if (this.state.categories != null) {
        categories = Object.keys(this.state.categories).map(function(key, index) {
          return <img className="img-circle" id={key} key={index} src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
        });
        return <div>
          <div className="categories d-flex justify-content-center">
            {categories}
          </div>
          <Menu currentCategory={this.state.currentCategory}/>
        </div>;
      }
      return <div></div>;
  }
}
export default CategoryMenu
