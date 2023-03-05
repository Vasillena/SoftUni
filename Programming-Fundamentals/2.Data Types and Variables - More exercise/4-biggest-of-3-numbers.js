function solve(...args) {
    let max = Number.NEGATIVE_INFINITY;
    let num = 0;
    for (let i = 0; i < args.length; i++){
        num = Number(args[i]);
    if (num > max){
        max = num;
    }
}
console.log(max);
}

solve(-2, 7, 3);