const bookSelection = require("./solution.js");
const { assert } = require("chai");

describe("bookSelection tests", () => {
  describe("Tests isGenreSuitable", () => {
    it("", () => {
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 10),
        "Books with Thriller genre are not suitable for kids at 10 age"
      );
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 12),
        "Books with Horror genre are not suitable for kids at 12 age"
      );
      assert.equal(
        bookSelection.isGenreSuitable("Comedy", 12),
        "Those books are suitable"
      );
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 15),
        "Those books are suitable"
      );
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 15),
        "Those books are suitable"
      );
    });
  });
  describe("Tests isItAffordable", () => {
    it("", () => {
      assert.throws(
        () => bookSelection.isItAffordable("A", 5),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(5, "A"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable("A", "B"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable("A", "5"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(undefined, 5),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(5, undefined),
        "Invalid input"
      );
    });
    it("", () => {
      assert.equal(
        bookSelection.isItAffordable(10, 5),
        "You don't have enough money"
      );
      assert.equal(
        bookSelection.isItAffordable(10, 0),
        "You don't have enough money"
      );
    });
    it("", () => {
      assert.equal(
        bookSelection.isItAffordable(5, 10),
        "Book bought. You have 5$ left"
      );
      assert.equal(
        bookSelection.isItAffordable(5, 5),
        "Book bought. You have 0$ left"
      );
    });
  });
  describe("Tests suitableTitles", () => {
    it("", () => {
      assert.throws(
        () => bookSelection.suitableTitles("A", "B"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles(1, "A"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles(undefined, "A"),
        "Invalid input"
      );
      assert.throws(() => bookSelection.suitableTitles([], 1), "Invalid input");
      assert.throws(
        () => bookSelection.suitableTitles([], []),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles([], undefined),
        "Invalid input"
      );
    });
    it("", () => {
      assert.deepEqual(
        bookSelection.suitableTitles(
          [
            { title: "A", genre: "Horror" },
            { title: "B", genre: "Comedy" },
          ],
          "Comedy"
        ),
        ["B"]
      );
    });
  });
});
