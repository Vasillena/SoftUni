function factorial(firstNum, secondNum) {
  function firstFactorial(firstNum) {
    let sum = 1;
    let currentNum = 0;
    for (let i = firstNum; i > 0; i--) {
      currentNum = i;
      sum = sum * currentNum;
    }
    return sum;
  }
  let sum = firstFactorial(firstNum);

  function secondFactorial(secondNum) {
    let sum2 = 1;
    let currentNum2 = 0;
    for (let j = secondNum; j > 0; j--) {
      currentNum2 = j;
      sum2 = sum2 * currentNum2;
    }
    return sum2;
  }
  let sum2 = secondFactorial(secondNum);
  console.log((sum / sum2).toFixed(2));
}
factorial(5, 2);
