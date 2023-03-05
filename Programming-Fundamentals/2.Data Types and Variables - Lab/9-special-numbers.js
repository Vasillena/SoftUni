function solve(number) {
  let isSpecial = true;

  for (let i = 1; i < number; i++) {
    let sumOfDigits = 0;
    let numberToString = i.toString();
    let stringLength = numberToString.length;

    for (let j = 0; j < stringLength; j++) {
      if (i >= 10) {
        sumOfDigits += Number(numberToString[j]);
      } else {
        sumOfDigits += Number([i]);
      }
    }
    if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
      isSpecial = true;
      console.log(`${i} -> True`);
    } else {
      isSpecial = false;
      console.log(`${i} -> False`);
    }
  }
}

solve(15);
