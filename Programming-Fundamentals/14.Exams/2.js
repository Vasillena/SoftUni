function numbers(input) {
  let workNumbers = input.shift().split(" ");
  let commands = input.slice();
  let currentCommand = commands.shift();

  while (currentCommand != "Finish") {
    let lineArgs = currentCommand.split(" ");
    let command = lineArgs[0];
    let number = lineArgs[1];
    let replace = lineArgs[2];

    switch (command) {
      case "Add":
        workNumbers.push(number);
        break;
      case "Remove":
        for (let i = 0; i < workNumbers.length; i++) {
          let isFound = false;
          if (workNumbers.includes(number)) {
            let itemIndex = workNumbers.indexOf(number);
            if (itemIndex > -1) {
              workNumbers.splice(itemIndex, 1);
              isFound = true;
            }
            if (isFound) {
              break;
            }
          }
        }
        break;
      case "Replace":
        if (workNumbers.includes(number)) {
          let itemIndex = workNumbers.indexOf(number);
          if (itemIndex > -1) {
            workNumbers.splice(itemIndex, 1, replace);
          }
        }
        break;
      case "Collapse":
        let filtered = workNumbers.map(Number).filter(x => x > number);
        workNumbers = filtered;
          break;
    }
    currentCommand = commands.shift();
  }

  console.log(workNumbers.join(" "));
}
//numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
//numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
