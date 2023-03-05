function solve(array, rotations) {
  for (let i = 0; i < rotations; i++) {
    let numbertoMove = array.shift();
    array.push(numbertoMove);
  }
  console.log(array.join(" "));

  // let rotationTimes = rotations % array.length;
  // for (let i = 0; i < rotationTimes; i++){
  // let firstElement = array[0];
  // for (let j = 0; j < array.length; j++){
  // array[j] = array[j + 1];
  //}
  //array[array.length - 1] = firstElement;
  // }
}

solve([51, 47, 32, 61, 21], 2);
