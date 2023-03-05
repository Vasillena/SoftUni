function solve(numbers) {
    let sum = 0;
    for (let textNumber of numbers){
        let number = Number(textNumber);
        if (number % 2 == 0){
        sum += number;
        }
    }
    console.log(sum);
}

solve(['1','2','3','4','5','6']);