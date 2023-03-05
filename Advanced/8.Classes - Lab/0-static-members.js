class Cat {
  isHungry = true;
  static legNumber = 4;

  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} says Meow!`);
  }
  static vetCheck(cat) {
    if (cat.isHungry) {
      console.log(`This cat should be fed!`);
    } else {
      console.log(`This cat is fine.`);
    }
  }
}
    let cat = new Cat("Navcho");
    
    //Static property
    console.log(Cat.legNumber);

    //Static method
    Cat.vetCheck(cat);
