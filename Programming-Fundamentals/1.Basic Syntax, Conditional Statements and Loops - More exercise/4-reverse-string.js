function solve(str){
    let splitString = str.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    console.log(joinArray);
}

solve('Hello');