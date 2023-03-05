function jansNotation(array) {
  const ERROR_MESSAGE = "Error: too many operands!";
  const SECOND_ERROR_MESSAGE = "Error: not enough operands!";
  const nums = [];
  const operations = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === "number") {
      nums.push(element);
    } else {
      if (nums.length < 2) {
        return SECOND_ERROR_MESSAGE;
      }
      nums.push(operations[element](nums.pop(), nums.pop()));
    }
  }
  if (nums.length != 1) {
    return ERROR_MESSAGE;
  }
  return nums[0];
}
jansNotation([3, 4, "+"]);
