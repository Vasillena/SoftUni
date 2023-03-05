function imitationGame(input) {
  let arr = input.slice();
  let message = arr.shift();
  let currentLine = arr.shift();
  let tempMessage = "";

  while (currentLine !== "Decode") {
    let tokens = currentLine.split("|");
    let commands = tokens[0];

    switch (commands) {
      case "Move":
        let lettersNumber = Number(tokens[1]);
        let lettersToMove = message.substring(0, lettersNumber);
        tempMessage = message.replace(lettersToMove, "");
        tempMessage += lettersToMove;
        message = tempMessage;
        break;
      case "Insert":
        let index = Number(tokens[1]);
        let value = tokens[2];
        tempMessage = message.split("");
        tempMessage.splice(index, 0, value);
        message = tempMessage.join("");
        break;
      case "ChangeAll":
        let substring = tokens[1];
        let replacement = tokens[2];

        while (message.includes(substring)) {
          tempMessage = message.replace(substring, replacement);
          message = tempMessage;
        }
        break;
    }

    currentLine = arr.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
imitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
