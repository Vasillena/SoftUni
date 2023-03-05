function aggregateElements(array) {
  let sum = array.reduce((p, c) => {
    return p + c;
  }, 0);
  let inverseSum = array.reduce((p, c) => {
    return p + 1 / c;
  }, 0);
  let concat = array.join("");

  console.log(`${sum}\n${inverseSum}\n${concat}`);
}
aggregateElements([1, 2, 3]);
