function solve(count, numbers) {
    let result = [];
    for (let i = 0; i < count; i++){
        result[count - 1 - i] = numbers[i];
    }

    // for (let i = count - 1; i >= 0; i--){
        // result.push(numbers[i]);
    //}
    console.log(result.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);