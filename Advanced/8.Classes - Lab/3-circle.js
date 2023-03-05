class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }

  set diameter(value) {
    if (value < 0) {
      throw new Error("Diameter can not be less than zero");
    }
    this.radius = value / 2;
  }
}

let circle = new Circle(2);
circle.diameter = 1.6;
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);
