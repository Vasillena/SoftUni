const createCalculator = require("./7-add-subtract");
const { expect } = require("chai");

describe("Calculator", () => {
  let calc = null;

  beforeEach(() => {
    calc = createCalculator();
  });
  it("Return zero initial value", () => {
    expect(calc.get()).to.equal(0);
  });

  it("Can add numbers", () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });

  it("Can add more than one numbers", () => {
    calc.add(1);
    calc.add(2);
    expect(calc.get()).to.equal(3);
  });

  it("Can subtract numbers", () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });

  it("Can subtract more than one numbers", () => {
    calc.subtract(1);
    calc.subtract(1);
    expect(calc.get()).to.equal(-2);
  });

  it("Can add and subtract numbers", () => {
    calc.add(2);
    calc.subtract(1);
    expect(calc.get()).to.equal(1);
  });

  it("Can add numbers as strings", () => {
    calc.add("2");
    expect(calc.get()).to.equal(2);
  });

  it("Can subtract numbers as strings", () => {
    calc.subtract("1");
    expect(calc.get()).to.equal(-1);
  });
});
