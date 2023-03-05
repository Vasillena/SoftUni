function Animal(type, name, age){
    this.type = type;
    this.name = name;
    this.age = age;
}

Animal.prototype.makeSound = function(){
    console.log(`${this.name} - ...`);
}
// let cat = new Animal('Cat', 'Gary', 4);
// console.log(cat);

function Cat(name, age){
    Animal.call(this, 'Cat', name, age)
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.purrr = function(){
    console.log(`${this.name} - purrr...`);
}

let navcho = new Cat('Navuhodonosor', 7);
navcho.makeSound();
navcho.purrr();