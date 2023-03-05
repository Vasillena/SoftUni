function largestNumber(a, b, c) {
  let result;
  if (a > b && a > c) {
    result = a;
  } else if (b > a && b > c) {
    result = b;
  } else {
    result = c;
  }
  console.log(`The largest number is ${result}.`);
}

// let array = [];
// array.push(a);
// array.push(b);
// array.push(c);

// let largest = array.reduce((p, a) => {
//   if (a > p) {
//     return a;
//   } else {
//     return p;
//   }
// }, 0);
// console.log(`The largest number is ${largest}.`);

largestNumber(5, -3, 16);
