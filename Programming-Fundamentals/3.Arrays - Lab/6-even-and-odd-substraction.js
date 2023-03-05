function solve(numbers){
    let n = Number(numbers.length);
    let even = 0;
    let odd =0;
    let diff = 0;
      for (let i = 0; i < n; i++)
          if (numbers[i] % 2 == 0){
              even += Number(numbers[i]);
          }else {
              odd += Number(numbers[i]);
          }
          diff = even - odd;
            console.log(diff);
        }
        
solve([1, 2, 3, 4, 5, 6])
solve([3,5,7,9]);