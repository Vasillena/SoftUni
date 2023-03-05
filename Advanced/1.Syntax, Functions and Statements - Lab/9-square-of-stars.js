function squareOfStars(number) {
  for (let i = 1; i <= number; i++) {
    let row = "* ".repeat(number);
    console.log(row);
  }
}
squareOfStars(5);
