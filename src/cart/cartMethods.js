mcompareTopings(topings1,topings2){
  var arr1 = [], arr2 = [];

  for(var i = 0; i < topings1.length;i++){
    arr1.push(topings1[i].toping_id)
  }

  for(var j = 0; j < topings2.length;j++){
    arr2.push(topings2[j].toping_id)
  }

  for (var i = 0; i < arr2.length; i++){
    if (!arr1.includes(arr2[i])){
      return false;
    }
  }

  for (var i = 0; i < arr1.length; i++){
    if (!arr2.includes(arr1[i])){
      return false;
    }
  }
  return true;
}

getCart(){
  const cookies = new Cookies();
  console.log(cookies.get('cart'));
}

addProductToCart(product){
  const cookies = new Cookies();
  var current_cart = cookies.get('cart');
    for(var i = 0; i < current_cart.quantityproducts; i++){
      if (product.product_id == current_cart.products[i].product_id &&
                                    this.compareTopings(product.topings,current_cart.products[i].topings)){
        current_cart.products[i].quantity += 1;
        current_cart.quantityproducts +=1;
        cookies.set('cart', current_cart, {path: '/'});
        return;
      }
    }
    cookies.set('cart', {
      quantityproducts: current_cart.quantityproducts + 1,
      products: [...current_cart.products,{
        quantity: 1,
        product_id: product.product_id,
        topings: product.topings
      }]}
      ,{path: '/'});
}

create_cart(){
  const cookies = new Coockies();
  cookies.set('cart', {
    quantityproducts: 0,
    products:[]
  }
  ,{path:'/'})
}

removeProductFromCart(product){
  const cookies = new Cookies();
  var current_cart = cookies.get('cart');
    if (current_cart.quantityproducts > 0){
      for(var i = 0; i < current_cart.quantityproducts; i++){
        if (product.product_id == current_cart.products[i].product_id &&
                                      this.compareTopings(product.topings,current_cart.products[i].topings) ){
          if (current_cart.products[i].quantity > 1){
            current_cart.products[i].quantity -= 1;
            current_cart.quantityproducts -=1;
            cookies.set('cart', current_cart, {path: '/'});
            return;
          }
          else{
            current_cart.products.splice(i,1);
            current_cart.quantityproducts -=1;
            cookies.set('cart', current_cart, {path: '/'});
            return;
          }
        }
      }
   }else {
     console.log("Thre is no products in cart");
     return;
   }
   console.log("There is no such product in cart");
}
