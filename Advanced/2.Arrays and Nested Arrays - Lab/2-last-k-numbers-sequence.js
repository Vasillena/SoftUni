function lastKNumbersSequence(n, k) {
  let resultarray = [1];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    let array = resultarray.slice(-k);
    sum = array.reduce((p, c) => p + c, 0);
    resultarray.push(sum);
  }
  return resultarray;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
