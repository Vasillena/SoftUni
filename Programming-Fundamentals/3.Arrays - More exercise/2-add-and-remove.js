function solve(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      result.push(i + 1);
    } else if (array[i] === "remove") {
      result.pop(i);
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
