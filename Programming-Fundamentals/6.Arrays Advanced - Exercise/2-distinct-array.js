function distinctArray(array) {
  let uniqueNumbersArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueNumbersArray.includes(array[i])) {
      uniqueNumbersArray.push(array[i]);
    }
  }
  console.log(uniqueNumbersArray.join(' '));

  // let uniqueNumbers = new Set(array);
  // console.log([...uniqueNumbers]);
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
