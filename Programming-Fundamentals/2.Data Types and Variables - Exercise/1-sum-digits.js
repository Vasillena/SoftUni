function solve(number){
    
    let numberAsString = number.toString();
    let sumOfDigits = 0;
    let numberOfDigits = numberAsString.length;

    for (let i = 0;  i < numberOfDigits; i++) {
        let currentDigit = Number(numberAsString[i]);
        sumOfDigits += currentDigit;
    }
    console.log(sumOfDigits);
}

solve(245678);