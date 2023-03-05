function palindromeIntegers(array){
    let arrayLength = array.length
    for (let i = 0; i < arrayLength; i++){
        let numberAsString = array[i].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString){
            console.log(true);
        }else
        console.log(false);
    }
}
palindromeIntegers([123, 323, 421, 121]);