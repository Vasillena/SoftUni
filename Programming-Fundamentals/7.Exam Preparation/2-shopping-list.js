function shoppingList(input) {
  // let initialShoppingList = input.shift().split('!');
  let rawList = input.shift();
  let shoppingList = rawList.split("!");
  let commands = input.slice();
  let currentCommand = commands.shift();

  while (currentCommand != "Go Shopping!") {
    let lineArgs = currentCommand.split(" ");
    let command = lineArgs[0];
    let firstArgument = lineArgs[1];
    let secondArgument = lineArgs[2];

    switch (command) {
      case "Urgent":
        if (!shoppingList.includes(firstArgument)) {
          shoppingList.unshift(firstArgument);
        }
        break;
      case "Unnecessary":
        // shoppingList = shoppingList.filter(x => x != firstArgument);
        let itemIndex = shoppingList.indexOf(firstArgument);
        if (itemIndex > -1) {
          shoppingList.splice(itemIndex, 1);
        }
        break;
      case "Correct":
        let updateIndex = shoppingList.indexOf(firstArgument);
        if (updateIndex > -1) {
          shoppingList[updateIndex] = secondArgument;
        }
        break;
      case "Rearrange":
        let removeIndex = shoppingList.indexOf(firstArgument);
        if (removeIndex > -1) {
          let element = shoppingList[removeIndex];
          shoppingList.splice(removeIndex, 1);
          shoppingList.push(element);
        }
        break;
    }
    currentCommand = commands.shift();
  }
  console.log(shoppingList.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
