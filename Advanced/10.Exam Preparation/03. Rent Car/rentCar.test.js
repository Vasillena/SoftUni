const rentCar = require("./rentCar.js");
const { assert, expect } = require("chai");

describe("RentCar Tests", () => {
  describe("searchCar", () => {
    it("Finds one car", () => {
      const shop = ["a", "b", "c"];
      const model = "a";

      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal("There is 1 car of model a in the catalog!");
    });
    it("Finds two cars", () => {
      const shop = ["a", "b", "a"];
      const model = "a";

      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal("There is 2 car of model a in the catalog!");
    });
    it("Finds three cars", () => {
      const shop = ["a", "a", "a", "b"];
      const model = "a";

      const result = rentCar.searchCar(shop, model);
      expect(result).to.equal("There is 3 car of model a in the catalog!");
    });
    it("Invalid shop (number)", () => {
      expect(() => {
        rentCar.searchCar(5, "a");
      }).to.throw();
    });
    it("Invalid shop (string)", () => {
      expect(() => {
        rentCar.searchCar("abc", "a");
      }).to.throw();
    });
    it("Invalid shop (undefined)", () => {
      expect(() => {
        rentCar.searchCar(undefined, "a");
      }).to.throw();
    });
    it("Invalid model", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "1"], 1);
      }).to.throw();
    });
    it("Car not found", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "c"], "d");
      }).to.throw();
    });
  });

  describe("calculatePriceOfCar", () => {
    it("Invalid model", () => {
      expect(() => {
        rentCar.calculatePriceOfCar(1, 1);
      }).to.throw();
    });
    it("Invalid days", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Volkswagen", "1");
      }).to.throw();
    });
    it("Invalid days 2", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Volkswagen", 1.1);
      }).to.throw();
    });
    it("Invalid days 3", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Volkswagen", 0);
      }).to.throw;
    });
    it("Invalid days 3", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Volkswagen", -1);
      }).to.throw;
    });
    it("Correct price for model", () => {
      const result = rentCar.calculatePriceOfCar("Volkswagen", 2);
      expect(result).to.equal("You choose Volkswagen and it will cost $40!");
    });
    it("Model not foind", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("a", 1);
      }).to.throw();
    });
  });

  describe("checkBudget", () => {
    it("Invalid costPerDay", () => {
      expect(() => {
        rentCar.checkBudget("1", 1, 1);
      }).to.throw();
    });
    it("Invalid days", () => {
      expect(() => {
        rentCar.checkBudget(1, "1", 1);
      }).to.throw();
    });
    it("Invalid budget", () => {
      expect(() => {
        rentCar.checkBudget(1, 1, "1");
      }).to.throw();
    });
    it("Invalid three inputs", () => {
      expect(() => {
        rentCar.checkBudget("1", "1", "1");
      }).to.throw();
    });
    it("Can afford", () => {
      const result = rentCar.checkBudget(1, 1, 1);
      expect(result).to.equal("You rent a car!");
    });
    it("Can afford (2)", () => {
      const result = rentCar.checkBudget(10, 3, 45);
      expect(result).to.equal("You rent a car!");
    });
    it("Can not afford", () => {
      const result = rentCar.checkBudget(1, 2, 1);
      expect(result).to.equal("You need a bigger budget!");
    });
  });
});
