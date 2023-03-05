function solve(array, number) {

    for (let i = 0; i < array.length; i++){
        for (let j = i; j < array.length; j++){
            if ((array[i] + array[j]) === number && array[i] !== array[j]){
                let result = `${array[i]} ${array[j]}`
                console.log(result);
            }
        }
    }
}

    /* Judge 100%
        for (let index = 0; index < array.length - 1; index++) {
        let currentElement = array[index];

        for (let j = index + 1; j < array.length; j++) {
            let nextElement = array[j];
            if (currentElement + nextElement === number) {
                console.log(`${currentElement} ${nextElement}`);
            }
        }
    }
}
    */

solve([1, 7, 6, 2, 19, 23], 8);
solve([1, 2, 3, 4, 5, 6], 6);