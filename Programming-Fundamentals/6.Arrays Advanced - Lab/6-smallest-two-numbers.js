function smallestTwoNumbers(array){

    let sorted = array.sort((a, b) => a - b);
    let smallest = sorted.splice(0, 2);
    console.log(smallest.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);