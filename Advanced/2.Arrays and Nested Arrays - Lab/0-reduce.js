function solve(){

    let array = [10, 20, 30, 40];
   
    console.log(reduce(array, sum, 0));
    //console.log(array.reduce(sum, 0));

    function reduce(arr, reducer, accumulator){
         for (let element of arr){
            console.log(`accumulator: ${accumulator} element: ${element} -> ${reducer(accumulator, element)}`);
        accumulator = reducer(accumulator, element);
    }
    return accumulator;
    }

    function sum(accumulator, element){
        return accumulator + element;
    }
    }
    solve();