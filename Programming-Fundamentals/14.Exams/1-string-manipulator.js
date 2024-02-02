function stringManipulator(input) {
  let string = input.shift();

  let command = input.shift().split(" ");

  while (command[0] !== "End") {
    switch (command[0]) {
      case "Translate":
        let ch = command[1];
        let replacement = command[2];
        while (string.includes(ch)) {
          string = string.replace(ch, replacement);
        }
        console.log(string);
        break;
      case "Includes":
        let substring = command[1];
        let isIncluded = string.includes(substring);
        if (isIncluded) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Start":
        let substring2 = command[1];
        let isStarting = string.startsWith(substring2);
        if (isStarting) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Lowercase":
        string = string.toLowerCase();
        console.log(string);
        break;
      case "FindIndex":
        let ch2 = command[1];
        let lastIndex = string.lastIndexOf(ch2);
        console.log(lastIndex);
        break;
      case "Remove":
        let startIndex = Number(command[1]);
        let count = Number(command[2]);
        let lettersToRemove = string.substring(startIndex, startIndex + count);
        string = string.replace(lettersToRemove, "");
        console.log(string);
        break;
    }

    command = input.shift().split(" ");
  }
}
stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
stringManipulator([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
