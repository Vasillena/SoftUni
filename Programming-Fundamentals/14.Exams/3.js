function angryCat(ratings, entryPoint, type) {
  let startPoint = ratings[entryPoint];
  let copyLeft = ratings.slice();
  let copyRight = ratings.slice();
  let leftSum = 0;
  let rightSum = 0;

  let leftSide = copyLeft.splice(0, entryPoint);
  let rightSide = copyRight.splice(entryPoint + 1);

  if (type === "cheap") {
    let lowerRatingLeft = leftSide.filter((x) => x < startPoint);
    let lowerRatingRight = rightSide.filter((x) => x < startPoint);

    for (i = 0; i < lowerRatingLeft.length; i++) {
      leftSum += lowerRatingLeft[i];
    }
    for (i = 0; i < lowerRatingRight.length; i++) {
      rightSum += lowerRatingRight[i];
    }
    if (leftSum > rightSum) {
      console.log(`Left - ${leftSum}`);
    } else if (leftSum < rightSum) {
      console.log(`Right - ${rightSum}`);
    } else if (leftSum === rightSum) {
      console.log(`Left - ${leftSum}`);
    }
  }
  if (type === "expensive") {
    let higherRatingLeft = leftSide.filter((x) => x => startPoint);
    let higherRatingRight = rightSide.filter((x) => x => startPoint);

    for (i = 0; i < higherRatingLeft.length; i++) {
      leftSum += higherRatingLeft[i];
    }
    for (i = 0; i < higherRatingRight.length; i++) {
      rightSum += higherRatingRight[i];
    }
    if (leftSum > rightSum) {
      console.log(`Left - ${leftSum}`);
    } else if (leftSum < rightSum) {
      console.log(`Right - ${rightSum}`);
    } else if (leftSum === rightSum) {
      console.log(`Left - ${leftSum}`);
    }
  }
}
angryCat([1, 5, 1], 1, "cheap");
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
