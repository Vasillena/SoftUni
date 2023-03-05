function solve(str, symbol, result) {

    let res = str.replace('_', symbol);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
}

solve('Str_ng', 'I', 'String');
solve('Str_ng', 'i', 'String');