let person = {
  name: "Pesho",
  age: 22,
  height: 190,
};

//Object freeze
Object.freeze(person); //не може да се записва ново пропърти
person.weight = 80;
console.log(person);

//Object seal = променяме съществуващите пропъртита, но не можем да добавяме нови или да махаме старите
//let clonedPerson = {...person}; shallow copy
let clonedPerson = Object.assign({}, person);
Object.seal(clonedPerson);
console.log(Object.getOwnPropertyDescriptors(clonedPerson));

//Using objects with const
const constantObject = {
  prop: "value",
};
constantObject.prop = "newValue"; //сменя се въпреки че е const
console.log(constantObject);
