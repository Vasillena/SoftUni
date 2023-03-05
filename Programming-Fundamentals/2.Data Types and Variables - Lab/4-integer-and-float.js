function solve(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;
    let type = '';
    if (Number.isInteger(sum)){
        type = 'Integer';
    } else {
        type = 'Float';
    }
    console.log(`${sum} - ${type}`);

    //let type = Number.isInteger(sum) ? 'Integer' : 'Float';
}

solve(9, 100, 1.1);