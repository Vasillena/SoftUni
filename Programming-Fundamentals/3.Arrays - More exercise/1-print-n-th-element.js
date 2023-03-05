function solve(array) {
  let n = Number(array.pop());
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i % n === 0) {
      result.push(array[i]);
    }
  }
  console.log(result.join(" "));
}
solve(["5", "20", "31", "4", "20", "2"]);
