function solve(input) {
  let currentArray = [];
  let currentSum = 0;
  let isMagic = true;
  let sumArray = [];
  for (let i = 0; i < input.length; i++) {
    currentArray = input[i];
    for (let j = 0; j < currentArray.length; j++) {
      currentSum += currentArray[j];
    }
    sumArray.push(currentSum);
    currentSum = 0;
  }
  for (let k = 0; k < input.length; k++) {
    for (let l = 0; l < input.length; l++) {
      currentArray = input[l];
      currentSum += currentArray[k];
    }
    sumArray.push(currentSum);
    currentSum = 0;
  }
  for (let m = 0; m < sumArray.length; m++) {
    if (sumArray[0] === sumArray[m]) {
      isMagic = true;
    } else {
      isMagic = false;
      break;
    }
  }
  console.log(isMagic);
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
