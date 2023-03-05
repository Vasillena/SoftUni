function mathOperations(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    case "%":
      console.log(a % b);
      break;
    case "**":
      console.log(a ** b);
      break;
  }

  // console.log(eval(`${a}${operator}${b}`));
}
mathOperations(5, 6, "+");
