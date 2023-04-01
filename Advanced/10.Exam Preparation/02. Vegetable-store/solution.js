class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    let result = [];
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");
      let currentVegetable = {
        type,
        quantity: Number(quantity),
        price: Number(price),
      };
      let foundProduct = this.availableProducts.findIndex(
        (x) => x.type == currentVegetable.type
      );
      if (foundProduct > -1) {
        this.availableProducts[foundProduct].quantity +=
          currentVegetable.quantity;
        if (
          this.availableProducts[foundProduct].price < currentVegetable.price
        ) {
          this.availableProducts[foundProduct].price = currentVegetable.price;
        }
      } else {
        this.availableProducts.push(currentVegetable);
        result.push(currentVegetable.type);
      }
    }
    return `Successfully added ${result.join(", ")}`;
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const product of selectedProducts) {
      let [type, quantity] = product.split(" ");
      let currentVegetable = {
        type,
        quantity: Number(quantity),
      };
      let foundProduct = this.availableProducts.findIndex(
        (x) => x.type == currentVegetable.type
      );
      if (foundProduct > -1) {
        if (
          this.availableProducts[foundProduct].quantity <
          currentVegetable.quantity
        ) {
          throw new Error(
            `The quantity ${currentVegetable.quantity} for the vegetable ${
              currentVegetable.type
            } is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        } else {
          totalPrice +=
            this.availableProducts[foundProduct].price *
            currentVegetable.quantity;
          this.availableProducts[foundProduct].quantity -=
            currentVegetable.quantity;
        }
      } else {
        throw new Error(
          `${
            currentVegetable.type
          } is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    // let currentVegetable = {
    //     type,
    //     quantity,
    //   };
    //   let foundProduct = this.availableProducts.findIndex(
    //     (x) => x.type == currentVegetable.type
    //   );
    //   if(foundProduct > -1){
    //     if( this.availableProducts[foundProduct].quantity < currentVegetable.quantity){
    //         this.availableProducts[foundProduct].quantity =0;
    //         return `The entire quantity of the ${currentVegetable.type} has been removed.`
    //     }else{
    //         this.availableProducts[foundProduct].quantity -= currentVegetable.quantity;
    //         return `Some quantity of the ${currentVegetable.type} has been removed.`
    //     }
    //   }else{
    //     throw new Error(`${currentVegetable.type} is not available in the store.`)
    //   }
    let foundProduct = this.availableProducts.findIndex((x) => x.type == type);
    if (foundProduct > -1) {
      if (this.availableProducts[foundProduct].quantity < quantity) {
        this.availableProducts[foundProduct].quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      } else {
        this.availableProducts[foundProduct].quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
      }
    } else {
      throw new Error(`${type} is not available in the store.`);
    }
  }
  revision() {
    let result = ["Available vegetables:"];
    let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
    for (const product of sorted) {
      let currentProduct = Object.values(product);
      let [type, quantity, price] = currentProduct;
      result.push(`${type}-${quantity}-$${price}`);
    }
    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return result.join("\n");
  }
}
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
