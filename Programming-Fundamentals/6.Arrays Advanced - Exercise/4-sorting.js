function sorting(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let resultArray = [];
  for (let i = 0; i < sortedArray.length; i++) {
    let lastElement = sortedArray.pop();
    let firstElement = sortedArray.shift();
    resultArray.push(lastElement);
    resultArray.push(firstElement);
  }
  resultArray.push(sortedArray.pop());
  resultArray.push(sortedArray.shift());

  console.log(resultArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
