import React, { Component } from 'react'
import js1 from '../assets/BackgroundCanvas/demo.css'
import js2 from '../assets/BackgroundCanvas/component.css'
import js3 from '../assets/CategoryMenu/categorumenu.js'
import Menu from './Menu.js'
class CategoryMenu extends Component {
  render () {
      return (
        <div className="categories d-flex justify-content-center">
          <img className="img-circle" id="category-all" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
          <img className="img-circle" id="category-pizza" src="http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32" width="100" height="100" />
          <img className="img-circle" id="category-rolls" src="http://2.bp.blogspot.com/-C6KY8tsc8Fw/T-SVFnncxjI/AAAAAAAAANw/FMiNzA8Zecw/s640/mr.bean.jpg" width="100" height="100" />
          <img className="img-circle" id="category-wok" src="http://cibosano.kg/files/products/nats.750x750w.png?b6c1c54c321e357306bf69d96e3fcf32" width="100" height="100" />
          <Menu/>
        </div>
      );

  }
}
export default CategoryMenu
