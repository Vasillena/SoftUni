function printElement(array, step) {
  let result = [];
  for (let i = 0; i < array.length; i += step) {
    result.push(array[i]);
  }
  return result;

  //return array.filter((el, index) => index % step == 0)
}
printElement(["5", "20", "31", "4", "20"], 2);
