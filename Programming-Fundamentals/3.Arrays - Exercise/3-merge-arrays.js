function solve(firstArray, secondArray) {
  let resultArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (i % 2 === 0) {
      resultArray.push(Number(firstArray[i]) + Number(secondArray[i]));
    } else {
      resultArray.push(firstArray[i] + secondArray[i]);
    }
  }
  console.log(resultArray.join(" - "));
}
solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
