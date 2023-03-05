// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return this.firstName + ' ' + this.lastName;
//     }
//     set fullName(name){
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// }

function createPerson(firstName, lastName) {
  const result = {
    firstName,
    lastName,
  };
  Object.defineProperty(result, "fullName", {
    enumerable: true,
    configurable: true,
    get() {
      return result.firstName + " " + result.lastName;
    },
    set(value) {
      [result.firstName, result.lastName] = value.split(" ");
    },
  });
  return result;
}

// const person = new Person('John', 'Smith');
const person = createPerson("John", "Smith");
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Peter Johnson";
console.log(person);
