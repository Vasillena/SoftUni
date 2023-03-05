function equalNeighbor(matrix) {
  let currentIndex = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][currentIndex] === matrix[i + 1][currentIndex]) {
        counter++;
      }
      currentIndex++;
    }
    currentIndex = 0;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][currentIndex] === matrix[i][currentIndex + 1]) {
        counter++;
      }
      currentIndex++;
    }
    currentIndex = 0;
  }

  return counter;
}
equalNeighbor([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
equalNeighbor([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
equalNeighbor([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
