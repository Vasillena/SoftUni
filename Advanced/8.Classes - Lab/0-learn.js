class Cat {
    isHungry = true;

    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`${this.name} says Meow!`);
    }
}
    let firstCat = new Cat('Navcho');
    let secondCat = new Cat('Garry');

    console.log(firstCat);
    console.log(secondCat);
    
    firstCat.makeSound();
    secondCat.makeSound();

    //Change properties runtime
    secondCat.name = 'Mishy';
    console.log(secondCat);

    let catNames = [
        'Navcho',
        'Garry',
        'Mishy',
        'Zuza',
        'Sisa',
    ];

    let cats = catNames.map(x => new Cat(x));
    cats.forEach(x => x.makeSound());

    //instanceof
    console.log(firstCat instanceof Cat); //true