function solution() {
  const library = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  const storedElements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  function manager(str) {
    let [command, action, quantity] = str.split(" ");
    quantity = Number(quantity);
    if (command === "prepare") {
      let recipe = library[action];
      for (const el in recipe) {
        if (recipe[el] * quantity > storedElements[el]) {
          return `Error: not enough ${el} in stock`;
        }
      }
      for (const el in recipe) {
        storedElements[el] -= recipe[el] * quantity;
      }
      return "Success";
    } else if (command === "restock") {
      storedElements[action] += quantity;
      return "Success";
    } else if (command === "report") {
      const result = [];
      for (const el in storedElements) {
        result.push(`${el}=${storedElements[el]}`);
      }
      return result.join(" ");
    }
  }
  return manager;
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock restock flavour 50
