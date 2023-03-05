function negativePositiveNumbers(arr){

const result = [];
for (let element of arr){
    if (element < 0){
        result.unshift(element);
    }else{
        result.push(element);
    }
}
for (let element of  result) {
    console.log(element);
}
// console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8 , 9])