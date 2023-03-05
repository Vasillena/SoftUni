let cat = {
  name: "Cat name",
  makeSound() {
    console.log(`${this.name} - meow...`);
  },
};
let navcho = Object.create(cat); //сетва прототипа на navcho да е равен на cat
console.log(navcho); //празен обект

navcho.name = "Navuhodonosor";
navcho.makeSound();
cat.makeSound();

console.log(cat == navcho.__proto__);

//Check if property is own
console.log(navcho.hasOwnProperty("name"));
console.log(navcho.hasOwnProperty("makeSound"));

//For in
console.log("---------for in iteration----------");
for (const key in navcho) {
  console.log(key); //makeSound е в прототипа, но го изкарва => for in работи и с прототипа
}

for (const key in navcho) {
  if (Object.hasOwnProperty.call(navcho, key)) {
    const element = navcho[key]; //само ако key е на navcho, тогава ще го разпечата
    console.log(element);
  }
}
