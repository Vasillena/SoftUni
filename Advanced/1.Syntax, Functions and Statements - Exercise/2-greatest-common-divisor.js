function greatestCommonDivisor(firstNum, secondNum) {
  let divisor = 0;
  if (firstNum % 9 == 0 && secondNum % 9 == 0) {
    divisor = 9;
  } else if (firstNum % 8 == 0 && secondNum % 8 == 0) {
    divisor = 8;
  } else if (firstNum % 7 == 0 && secondNum % 7 == 0) {
    divisor = 7;
  } else if (firstNum % 6 == 0 && secondNum % 6 == 0) {
    divisor = 6;
  } else if (firstNum % 5 == 0 && secondNum % 5 == 0) {
    divisor = 5;
  } else if (firstNum % 4 == 0 && secondNum % 4 == 0) {
    divisor = 4;
  } else if (firstNum % 3 == 0 && secondNum % 3 == 0) {
    divisor = 3;
  } else if (firstNum % 2 == 0 && secondNum % 2 == 0) {
    divisor = 2;
  } else if (firstNum % 1 == 0 && secondNum % 1 == 0) {
    divisor = 1;
  }
  console.log(divisor);
}
greatestCommonDivisor(15, 5);
