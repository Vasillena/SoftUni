function store(available, delivery) {
  let storedProducts = {};
  let availableLength = available.length;
  let deliveryLength = delivery.length;

  for (let i = 0; i < availableLength; i += 2) {
    let currentProduct = available[i];
    storedProducts[currentProduct] = Number(available[i + 1]);
  }

  for (let j = 0; j < deliveryLength; j += 2) {
    let currentPrduct = delivery[j];
    if (!storedProducts.hasOwnProperty(currentPrduct)) {
      storedProducts[currentPrduct] = 0;
    }
    storedProducts[currentPrduct] += Number(delivery[j + 1]);
  }
  for (const product in storedProducts){
    console.log(`${product} -> ${storedProducts[product]}`);
  }
}
store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
