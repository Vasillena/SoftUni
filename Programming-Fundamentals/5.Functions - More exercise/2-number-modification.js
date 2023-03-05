function numberModification(number){

    let array = number.toString().split('');
    let sum = 0;
    let average = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
       let currentNum = Number(array[j]);
        sum += currentNum;
        average = sum / array.length;
        }
    if (average <= 5){
        array.push(9);
        sum = 0;
    }
    }
    console.log(array.join(''));
}
numberModification(101);
numberModification(5835);