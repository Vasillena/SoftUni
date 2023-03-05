function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
  // this.greet = function(){
  //     console.log(`Hello! My name is ${this.name}.`);
  // }
}
//Прототип върху функциите, не върху обектите, няма общо с другия __proto__
Person.prototype.greet = this.greet = function () {
  console.log(`Hello! My name is ${this.name}.`);
}; // така всичко ще сочи към един прототип
let person = new Person("Pesho", 22, 190);
let person2 = new Person("Gosho", 32, 170);
console.log(person);
console.log(person instanceof Person);

person.greet();
person2.greet();

console.log(person.greet === person2.greet); //false //Две различни функции на различни места в паметта (разхищение на памет)
