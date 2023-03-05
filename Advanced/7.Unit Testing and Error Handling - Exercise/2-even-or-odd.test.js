const isOddOrEven = require("./2-even-or-odd.js");
const { assert } = require("chai");

describe("isOddOrEven function tests", () => {
  it("Should return undefined if parameter is number", () => {
    assert.equal(isOddOrEven(10), undefined);
  });
  it("Should return undefined if parameter is object", () => {
    assert.equal(isOddOrEven({}), undefined);
  });
  it("Should return undefined if parameter is array", () => {
    assert.equal(isOddOrEven([]), undefined);
  });
  it("Should return undefined if parameter is undefined", () => {
    assert.equal(isOddOrEven(undefined), undefined);
  });
  it("Should return undefined if parameter is null", () => {
    assert.equal(isOddOrEven(null), undefined);
  });
  it("Should return even", () => {
    assert.equal(isOddOrEven("Hi"), "even");
  });
  it("Should return odd", () => {
    assert.equal(isOddOrEven("Hello"), "odd");
  });
});
