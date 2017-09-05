getCoockies(){
  const cookiess = new Cookies();
  var cont = cookiess.get('cart');
  var contt = {
    quantity: cont.quantity + 1,
  };
  console.log(contt);
  cookiess.set('cart', contt, {path: '/'});
}
addProductToCart(){
  const coockis = new Coockies();
  coockis.set('cart', {

  },{path: '/'});
}
addProductToCart(){
  const coockies = new Cookies();
  coockies.set('cart',{
      quantityproducts: int,
      products: [
        {
          category: string,
          name: string,
          description: string,
          price: int,
          aditional_info_bool: bool,
          aditional_info: [string, string],
          quantity_topings: int,
          topings: [{
            name: string,
            count: int,
            price_per_one: int,
            price_total: int,
            weight_per_one: int,
            weight_total: int
          },
          {

          }]

        },
        {

        }
      ]

  },
  {path:'/'});
}
