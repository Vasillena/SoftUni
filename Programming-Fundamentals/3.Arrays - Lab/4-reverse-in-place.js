function solve(input) {
    for (let i = 0; i <= input.length / 2; i++){
        let tempElement = input[i];
        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = tempElement;
    }
    console.log(input.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);