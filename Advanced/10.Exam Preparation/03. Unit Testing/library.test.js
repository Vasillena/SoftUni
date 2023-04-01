let { library } = require("./library.js");
const { assert, expect } = require("chai");

describe("Library tests", () => {
  describe("calcPriceOfBook tests", () => {
    it("Invalid input - name of the book", () => {
      expect(() => library.calcPriceOfBook(1, 1)).to.throw("Invalid input");
    }); //Използваме функция, когато трябва да хвърлим грешка
    it("Invalid input - year", () => {
      expect(() => library.calcPriceOfBook("1", "1")).to.throw("Invalid input");
    });
    it("Valid data and year is below 1980", () => {
      expect(library.calcPriceOfBook("The Little Prince", 1943)).to.equal(
        `Price of The Little Prince is 10.00`
      );
    });
    it("Valid data and year is equal to 1980", () => {
      expect(library.calcPriceOfBook("The Little Prince", 1980)).to.equal(
        `Price of The Little Prince is 10.00`
      );
    });
    it("Valid data and year greater than 1980", () => {
      expect(library.calcPriceOfBook("The Little Prince", 2000)).to.equal(
        `Price of The Little Prince is 20.00`
      );
    });
  });
  describe("findBook tests", () => {
    it("Invalid input - empty array", () => {
      expect(() => library.findBook([], "The Little Prince")).to.throw(
        "No books currently available"
      );
    });
    it("Valid input - available book", () => {
      expect(
        library.findBook(["Troy", "Life Style", "Torronto"], "Troy")
      ).to.equal("We found the book you want.");
    });
    it("Valid input - not available book", () => {
      expect(
        library.findBook(
          ["Troy", "Life Style", "Torronto"],
          "The Little Prince"
        )
      ).to.equal("The book you are looking for is not here!");
    });
  });
  describe("arrangeTheBooks tests", () => {
    it("Invalid input - string", () => {
      expect(() => library.arrangeTheBooks("Test")).to.throw("Invalid input");
    });
    it("Invalid input - negative number", () => {
      expect(() => library.arrangeTheBooks(-10)).to.throw("Invalid input");
    });
    it("Valid input - less than available space (39)", () => {
      expect(library.arrangeTheBooks(39)).to.equal(
        "Great job, the books are arranged."
      );
    });
    it("Valid input - equal to the available space (40)", () => {
      expect(library.arrangeTheBooks(40)).to.equal(
        "Great job, the books are arranged."
      );
    });
    it("Valid input - greater than the available space (45)", () => {
      expect(library.arrangeTheBooks(45)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
