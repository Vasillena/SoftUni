let person = {
  name: "Pesho",
  age: 20,
};

let internalNameProperties = Object.getOwnPropertyDescriptor(person, "name");
console.log(internalNameProperties);

//Modify internal property of existing property
Object.defineProperty(person, "name", { enumerable: false });
for (const key in person) {
  console.log(key); //не се показва при изброяване
}

//Add new property and configure internal properties
Object.defineProperty(person, "height", { value: 190, enumerable: true });
console.log(person);

console.log(JSON.stringify(person)); //no person in it

//Can not change value of non writable property
Object.defineProperty(person, "height", {
  value: 190,
  enumerable: true,
  writable: false,
});
person.height = 192; //Does not work!
console.log(person.height);

// Can not modify the other properties (enumerable and writable) and can not delete 'height
Object.defineProperty(person, "height", { value: 190, configurable: false });

//Define more than one property at once
Object.defineProperties(person, {
  name: {
    enumerable: true,
  },
  age: {
    value: 22,
    configurable: false,
  },
});

console.log(person);

//Add getter
Object.defineProperty(person, "info", {
  get: function () {
    return `${this.name} - ${this.age}`;
  },
  set: function (value) {
    let [name, ageText] = value.split(" - ");

    this.name = name;
    this.age = Number(ageText);
  },
});
person.info = "Gosho - 32";
console.log(person.info);
console.log(person); //сменени са name и age