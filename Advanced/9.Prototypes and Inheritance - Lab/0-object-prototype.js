let person = {
    name: "Pesho",
    age: 22,
    height: 190,
  };
  
  let personPrototype = Object.getPrototypeOf(person);
  personPrototype.weight = 80;
  console.log(personPrototype);

  console.log(person);
  console.log(person.weight);

  //Different object with different references
  console.log(personPrototype == person); //false
  console.log(person.__proto__ == personPrototype); //true