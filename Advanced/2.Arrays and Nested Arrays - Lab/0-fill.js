function solve(){

let arr = [1, 2, 3, 4];
console.log(arr.fill(0, 2, 4)); //[1, 2, 0, 0]
console.log(arr.fill(5, 1)); //[1, 5, 5, 5]
console.log(arr.fill(6)); //[6, 6, 6, 6]
}
solve();