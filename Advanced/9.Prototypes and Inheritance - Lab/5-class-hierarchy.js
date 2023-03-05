function classHierarchy() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
      this.unitsConvert = { m: 1 / 100, cm: 1, mm: 1 * 10 };
    }

    get area() {}

    changeUnits(newUnit) {
      this.units = newUnit;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }

    get area() {
      this.result =
        Math.PI * Math.pow(this.radius * this.unitsConvert[this.units], 2);
      return this.result;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${
        this.radius * this.unitsConvert[this.units]
      }`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
    }

    get area() {
      this.result =
        this.width *
        this.unitsConvert[this.units] *
        (this.height * this.unitsConvert[this.units]);
      return this.result;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${
        this.width * this.unitsConvert[this.units]
      }, height: ${this.height * this.unitsConvert[this.units]}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}
