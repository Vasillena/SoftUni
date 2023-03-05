function smallestTwoNumbers(array) {
  let sortedArray = array.sort((a, b) => a - b);
  console.log(`${sortedArray[0]} ${sortedArray[1]}`);
}
smallestTwoNumbers([30, 15, 50, 5]);
