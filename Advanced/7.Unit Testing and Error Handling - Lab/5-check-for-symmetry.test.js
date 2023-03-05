const { expect } = require("chai");
const isSymmetric = require("./5-check-for-symmetry");

describe("Symmetry checker", function () {
  it("Returns true for symmetryc array", () => {
    const arr = [1, 2, 2, 1];
    expect(isSymmetric(arr)).to.be.true;
  });
  it("Returns false for non-symmetryc array", () => {
    const arr = [1, 2, 3];
    expect(isSymmetric(arr)).to.be.false;
  });
  it("Returns false with non-array argument", () => {
    const data = 121;
    expect(isSymmetric(data)).to.be.false;
  });
  it("Returns true when length is odd", () => {
    const arr = [1, 2, 1];
    expect(isSymmetric(arr)).to.be.true;
  });
  it("Returns false for array-like arguments", () => {
    const data = "1221";
    expect(isSymmetric(data)).to.be.false;
  });
  it("Returns false for type mistmatch element", () => {
    let arr = [1, 2, "1"];
    expect(isSymmetric(arr)).to.be.false;
  });
  it("Works with symetric string array", () => {
    let arr = ["a", "b", "b", "a"];
    expect(isSymmetric(arr)).to.be.true;
  });
});
