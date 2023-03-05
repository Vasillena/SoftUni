const flowerShop = require("./flowerShop.js");
const { assert } = require("chai");

describe("Test flowerShop", () => {
  describe("Test calcPriceOfFlowers", () => {
    it("Invalid input", () => {
      assert.throws(() => flowerShop.calcPriceOfFlowers(0, 0, 0), "Invalid input!");
      assert.throws(() => flowerShop.calcPriceOfFlowers(1, 1, 1), "Invalid input!");
      assert.throws(() => flowerShop.calcPriceOfFlowers(1, "1", 1), "Invalid input!");
      assert.throws(() => flowerShop.calcPriceOfFlowers(1, 1, "1"), "Invalid input!");
      assert.throws(() => flowerShop.calcPriceOfFlowers("A", 0.1, 1), "Invalid input!");
      assert.throws(() => flowerShop.calcPriceOfFlowers("A", 1, 0.1), "Invalid input!");
      assert.throws(
        () => flowerShop.calcPriceOfFlowers(undefined, 1, 1),
        "Invalid input!"
      );
      assert.throws(
        () => flowerShop.calcPriceOfFlowers("A", undefined, 1),
        "Invalid input!"
      );
      assert.throws(
        () => flowerShop.calcPriceOfFlowers("A", 1, undefined),
        "Invalid input!"
      );
      assert.throws(() => flowerShop.calcPriceOfFlowers("A", NaN, 1), "Invalid input!");
    });
    it("Correct result", () => {
      assert.equal(flowerShop.calcPriceOfFlowers("A", 1, 1), "You need $1.00 to buy A!");
      assert.equal(flowerShop.calcPriceOfFlowers("A", 0, 1), "You need $0.00 to buy A!");
      assert.equal(flowerShop.calcPriceOfFlowers("A", 1, 0), "You need $0.00 to buy A!");
      assert.equal(flowerShop.calcPriceOfFlowers("A", 5, 10), "You need $50.00 to buy A!");
    });
  });
  describe("Test checkFlowersAvailable", () => {
    it("Flowers available", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("A", ["A", "B", "C"]),
        "The A are available!"
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("A", ["A", "A", "C"]),
        "The A are available!"
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("A", ["A", "A", "A"]),
        "The A are available!"
      );
      assert.equal(flowerShop.checkFlowersAvailable("A", ["A"]), "The A are available!");
    });
    it("Flowers sold", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("D", ["A", "B", "C"]),
        "The D are sold! You need to purchase more!"
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("a", ["A", "B", "C"]),
        "The a are sold! You need to purchase more!"
      );
    });
  });
  describe("Test sellFlowers", () => {
    it("Invalid input", () => {
      assert.throws(() => flowerShop.sellFlowers(0, 0), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(1, 1), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers("A", 1), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(undefined, 1), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers([], 1), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(["A", "B"], 2), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(["A", "B"], "1"), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(["A", "B"], undefined), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(["A", "B"], 0.5), "Invalid input!");
      assert.throws(() => flowerShop.sellFlowers(["A", "B"], -1), "Invalid input!");
    });
    it("Remove element", () => {
      assert.equal(flowerShop.sellFlowers(["A", "B", "C"], 0), "B / C");
      assert.equal(flowerShop.sellFlowers(["A", "B", "C"], 1), "A / C");
      assert.equal(flowerShop.sellFlowers(["A", "B", "C"], 2), "A / B");
    });
  });
});
