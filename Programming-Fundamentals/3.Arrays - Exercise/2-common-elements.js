function solve(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        console.log(firstArray[i]);
      }
    }
  }
  // for (const element of firstArray){
  // if (secondArray.includes(element)){
  // console.log(element);
  //}
  //}
}

solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
