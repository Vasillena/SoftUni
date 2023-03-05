function extract(array) {
  let biggestNumber = array.shift();
  const finalResult = [biggestNumber];
  for (const number of array) {
    if (number >= biggestNumber) {
      biggestNumber = number;
      finalResult.push(number);
    }
  }
  return finalResult;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
