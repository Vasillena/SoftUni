function gladiatorInventory(input) {
  let currentInventory = input.shift().split(" ");
  let commands = input.slice();

  for (let i = 0; i < commands.length; i++) {
    let lineArgs = commands[i].split(" ");
    let command = lineArgs[0];
    let item = lineArgs[1];

    switch (command) {
      case "Buy":
        if (!currentInventory.includes(item)) {
          currentInventory.push(item);
        }
        break;
      case "Trash":
        if (currentInventory.includes(item)) {
          let itemIndex = currentInventory.indexOf(item);
          if (itemIndex > -1) {
            currentInventory.splice(itemIndex, 1);
          }
        }
        break;
      case "Repair":
        if (currentInventory.includes(item)) {
          let itemIndex = currentInventory.indexOf(item);
          if (itemIndex > -1) {
            currentInventory.splice(itemIndex, 1);
            currentInventory.push(item);
          }
        }
        break;
      case "Upgrade":
        let wholeItem = item.split("-");
        let oldItem = wholeItem[0];
        let upgrade = wholeItem[1];
        if (currentInventory.includes(oldItem)) {
          let itemIndex = currentInventory.indexOf(oldItem);
          if (itemIndex > -1) {
            currentInventory.splice(itemIndex + 1, 0, `${oldItem}:${upgrade}`);
          }
        }
        break;
    }
  }
  console.log(currentInventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
