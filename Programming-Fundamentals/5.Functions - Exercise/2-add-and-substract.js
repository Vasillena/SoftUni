function addAndSubstract(firstNum, secondNum, thirdNum) {
  function add(firstNum, secondNum) {
    let sum = firstNum + secondNum;
    return sum;
  }
  let sum = add(firstNum, secondNum);

  function substract(sum, thirdNum) {
    return sum - thirdNum;
  }
  let result = substract(sum, thirdNum);
  console.log(result);
}

addAndSubstract(23, 6, 10);
