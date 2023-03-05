function sumOfNumbers(n, m) {
  let firstNum = Number(n);
  let secondNum = Number(m);
  let sum = 0;

  for (let i = firstNum; i <= secondNum; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");
