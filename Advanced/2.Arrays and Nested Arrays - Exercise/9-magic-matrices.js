function magicMatrices(input) {
  let sumRow = 0;
  let sumCol = 0;

  for (let i = 0; i < input.length; i++) {
    let currentArray = input[i].join("");
    for (let j = 0; j < currentArray.length; j++) {
      sumRow += Number(currentArray[j]);
      sumCol += Number(currentArray[0]);
    }
  }
  if (sumRow === sumCol) {
    console.log("true");
  } else {
    console.log("false");
  }
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
