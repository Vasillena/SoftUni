function solve(array) {
  let rotations = array.pop();
  let result = [];
  for (let i = 0; i < rotations; i++) {
    let lastEl = array.pop();
    array.unshift(lastEl);
  }
  console.log(array.join(" "));
}

solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
