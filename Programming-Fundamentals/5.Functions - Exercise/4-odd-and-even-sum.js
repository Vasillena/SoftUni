function oddAndEvenSum(num) {
  let numberAsString = num.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    let singleNumber = Number(numberAsString[i]);

    if (singleNumber % 2 === 0) {
      evenSum += singleNumber;
    } else {
      oddSum += singleNumber;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
