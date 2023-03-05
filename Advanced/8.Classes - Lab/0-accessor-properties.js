class Circle {
    #pi = Math.PI; //private property/method #, работи само вътре в класа
    constructor(radius){
        this.radius = radius;
        this._perimeter = 2 * Math.PI * radius;
    }
    get area(){
        return this.#pi * this.radius ** 2;
    }
    set area(value){
        this.radius = value / 2; //wrong formula
    }
    get perimeter(){
        return this._perimeter
    }
    set perimeter(value){
        if(value < 0){
            throw new Error('Perimeter can not be less than zero')
        }
        this._perimeter = value;
    }
}

let circle = new Circle(2);
console.log(circle.area);

circle.radius = 3;
console.log(circle.area);

circle.area = 20;
console.log(circle.area);