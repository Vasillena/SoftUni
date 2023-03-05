function solve(number){
    let textNum = number.toString();
    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i < textNum.length; i++) {
        let currentNum = Number(textNum[i]);
        sum += currentNum;
    }

    let sumText = sum.toString();
    for (let i = 0; i < sumText.length; i++) {
        let currentDigit = sumText[i];
        if (currentDigit == '9'){
            isAmazing = true;
            break;
        }
    }
    console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}

solve(1233);