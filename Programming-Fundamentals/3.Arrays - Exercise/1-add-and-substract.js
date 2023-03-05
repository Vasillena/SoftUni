function solve(input) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < input.length; i++) {
    sum1 += input[i];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }
  }
  for (let i = 0; i < input.length; i++) {
    sum2 += input[i];
  }
  console.log(input);
  console.log(sum1);
  console.log(sum2);
}
solve([5, 15, 23, 56, 35]);
