function arrayManipulator(array, operations) {

  let result = array.slice();
  let commands = operations.slice();
  let currentCommand = commands.shift();

  while (currentCommand != "print") {
    let lineArgs = currentCommand.split(" ");
    let command = lineArgs[0];
    let index = Number(lineArgs[1]);
    let element = Number(lineArgs[2]);

    switch (command) {
      case "add":
        result.splice(index, 0, element);
        break;
      case "addMany":
        for (let i = 2; i < lineArgs.length; i++){
            let nextElement = Number(lineArgs[i]);
            result.splice(index, 0, nextElement);
            index++;
        }
        break;
      case "contains":
        let itemIndex = result.indexOf(index);
            console.log(itemIndex);
        break;
      case "remove":
        result.splice(index, 1)
        break;
      case "shift":
        for (let i = 0; i < index; i++){
            let shifted = result.shift();
            result.push(shifted);
        }
        break;
      case "sumPairs":
        let arrayNumbersSum = [];
        while (result.length > 0 ){;
            let sum = result[0] + result[1];
            if (result.length === 1){
                sum = result[0];
            }
            arrayNumbersSum.push(sum);
            result.splice(0,2);
        }
        result = arrayNumbersSum; 
        break;
    }
    currentCommand = commands.shift();
  }
  console.log(`[ ${result.join(", ")} ]`)
}
//arrayManipulator([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);
arrayManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
