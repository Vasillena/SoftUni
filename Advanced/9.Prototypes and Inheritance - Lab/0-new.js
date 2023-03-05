function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name}.`);
};

function make(constructor, first, second) {
  //1. Create new object
  let obj = {};
  //2. Set prototype of the object
  Object.setPrototypeOf(obj, constructor.prototype);
  //3. Calls constructor
  constructor.call(obj, first, second);
  //4. Return create object
  return obj;
}

//Using new keyword
let pepi = new Person('Pesho', 17)
pepi.greet()

//Using custom new function
let goshko = make(Person, "Georgi", 15);
goshko.greet();
