const findNewApartment = require("./findApartment");
const { assert } = require("chai");

describe("Tests findNewApartment", () => {
  describe("Tests isGoodLocation", () => {
    it("", () => {
      assert.throws(
        () => findNewApartment.isGoodLocation(1, true),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isGoodLocation(true, true),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isGoodLocation(undefined, true),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isGoodLocation("A", "true"),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isGoodLocation("A", 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isGoodLocation("A", undefined),
        "Invalid input!"
      );
    });
    it("", () => {
      assert.equal(
        findNewApartment.isGoodLocation("Gabrovo", true),
        "This location is not suitable for you."
      );
      assert.equal(
        findNewApartment.isGoodLocation("Gabrovo", false),
        "This location is not suitable for you."
      );
      assert.equal(
        findNewApartment.isGoodLocation("Sofia", true),
        "You can go on home tour!"
      );
      assert.equal(
        findNewApartment.isGoodLocation("Plovdiv", true),
        "You can go on home tour!"
      );
      assert.equal(
        findNewApartment.isGoodLocation("Varna", true),
        "You can go on home tour!"
      );
      assert.equal(
        findNewApartment.isGoodLocation("Sofia", false),
        "There is no public transport in area."
      );
      assert.equal(
        findNewApartment.isGoodLocation("Plovdiv", false),
        "There is no public transport in area."
      );
      assert.equal(
        findNewApartment.isGoodLocation("Varna", false),
        "There is no public transport in area."
      );
    });
  });
  describe("Tests isLargeEnough", () => {
    it("", () => {
      assert.throws(
        () => findNewApartment.isLargeEnough(1, 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough("A", 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough({ a: "a", b: "b" }, 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough([], 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough(undefined, 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough([1, 2], "1"),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough([1, 2], [1]),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isLargeEnough([1, 2], undefined),
        "Invalid input!"
      );
    });
    it("", () => {
      assert.equal(findNewApartment.isLargeEnough([10, 20, 30], 20), "20, 30");
      assert.equal(
        findNewApartment.isLargeEnough([10, 20, 30], 10),
        "10, 20, 30"
      );
      assert.equal(findNewApartment.isLargeEnough([10], 10), "10");
    });
  });
  describe("Tests isItAffordable", () => {
    it("", () => {
      assert.throws(
        () => findNewApartment.isItAffordable("1", 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable([1], 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(undefined, 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(0, 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(-1, 1),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(1, "1"),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(1, [1]),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(1, undefined),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(1, 0),
        "Invalid input!"
      );
      assert.throws(
        () => findNewApartment.isItAffordable(1, -1),
        "Invalid input!"
      );
    });
    it("", () => {
      assert.equal(
        findNewApartment.isItAffordable(20, 10),
        "You don't have enough money for this house!"
      );
      assert.equal(
        findNewApartment.isItAffordable(10, 20),
        "You can afford this home!"
      );
    });
  });
});
