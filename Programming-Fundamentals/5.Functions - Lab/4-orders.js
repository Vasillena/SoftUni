function orders(product, quantity) {
  function productPrice(product) {
    let price = 0;
    switch (product) {
      case "coffee":
        price = 1.5;
        break;
      case "water":
        price = 1.0;
        break;
      case "coke":
        price = 1.4;
        break;
      case "snacks":
        price = 2.0;
        break;
    }
    return price;
  }
  let price = productPrice(product);
  function result(quantity) {
    let totalPrice = price * quantity;
    return totalPrice;
  }
  let totalPrice = result(quantity);
  console.log(totalPrice.toFixed(2));
}
orders("water", 5);
