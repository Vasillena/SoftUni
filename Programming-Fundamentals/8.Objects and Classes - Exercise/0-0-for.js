function test() {
  let arr = [1, 2, 3, 4];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (const el of arr) {
    console.log(el);
  }

  arr.forEach((el) => console.log(el));
}

let obj = {
  name: "asd",
  age: 20,
};

for (const key in obj) {
  console.log(`${key} ---- ${obj[key]}`);
}
test();
