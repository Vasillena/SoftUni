function biggestElement(matrix) {
  let array = matrix.flat();
  let sortedArray = array.sort((a, b) => b - a);
  console.log(sortedArray[0]);
}
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
