function movingTarget(input) {
  let targets = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let currentLine = input.shift();

  while (currentLine != "End") {
    // let [command, index, power] = currentCommand.split(' '); //but index and power are strings
    let lineArgs = currentLine.split(" ");
    let command = lineArgs[0];
    let index = Number(lineArgs[1]);
    let power = Number(lineArgs[2]);

    switch (command) {
      case "Shoot":
        if (targets[index]) {
          targets[index] -= power;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;
      case "Add":
        if (targets[index]) {
          targets.splice(index, 0, power);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        let radius = power;
        let lowerIndex = index - radius;
        let upperIndex = index + radius;
        if (targets[lowerIndex] && targets[upperIndex]) {
          targets.splice(index - radius, radius * 2 + 1);
        } else {
          console.log("Strike missed!");
        }
        break;
    }
    currentLine = input.shift();
  }
  console.log(targets.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
