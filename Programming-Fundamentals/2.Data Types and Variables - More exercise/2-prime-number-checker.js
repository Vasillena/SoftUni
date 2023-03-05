function solve(num) {
    
    isPrime = true;
    if (num > 1) {
        for (let i = 2; i < num; i++){
            if (num % i == 0){
                isPrime = false
            }
        }
        console.log(isPrime);
    }
}

solve(7);
solve(81);