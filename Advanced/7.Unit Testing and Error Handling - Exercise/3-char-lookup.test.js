const lookupChar = require("./3-char-lookup.js");
const { assert, expect } = require("chai");

describe("lookupChar function tests", () => {
  it("Should return char at index", () => {
    expect(lookupChar("Love", 1)).to.be.equal("o");
  });
  //   it("Should return char at index", () => {
  //     assert(lookupChar('Love', 0) === 'L');
  //   });
  it("Index over the string length", () => {
    expect(lookupChar("Love", 10)).to.be.equal("Incorrect index");
  });
  it("Negative string index", () => {
    expect(lookupChar("Love", -10)).to.be.equal("Incorrect index");
  });
  it("Empty string as input", () => {
    expect(lookupChar("", 0)).to.be.equal("Incorrect index");
  });
  it("Should return undefined if first parameter is not string", () => {
    expect(lookupChar(100, 10)).to.be.equal(undefined);
  });
  it("Should return undefined if first parameter is string and the second is decimal", () => {
    expect(lookupChar("Love", 10.5)).to.be.equal(undefined);
  });
  it("Should return undefined with wrong parameters type", () => {
    expect(lookupChar(10, "Love")).to.be.equal(undefined);
  });
});
