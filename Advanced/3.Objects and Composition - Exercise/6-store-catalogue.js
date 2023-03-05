function storeCatalogue(array) {
  let catalogue = {};

  for (const line of array) {
    let [product, price] = line.split(" : ");
    let firstLetter = product[0];
    if (!catalogue.hasOwnProperty(firstLetter)) {
      catalogue[firstLetter] = {};
    }
    catalogue[firstLetter][product] = price;
  }
  let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
  for (const key of sorted) {
    console.log(key);
    let sortedProducts = Object.keys(catalogue[key]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (const product of sortedProducts) {
      console.log(`  ${product}: ${catalogue[key][product]}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
