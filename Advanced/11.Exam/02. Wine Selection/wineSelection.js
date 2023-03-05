class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }
  reserveABottle(wineName, wineType, price) {
    let bottle = {
      wineName,
      wineType,
      price,
      paid: false,
    };
    if (this.wines.length >= this.space) {
      throw new Error("Not enough space in the cellar.");
    } else {
      this.wines.push(bottle);
      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
  }
  payWineBottle(wineName, price) {
    let index = this.wines.findIndex((x) => x.wineName == wineName);
    if (index == -1) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (this.wines[index].paid == true) {
      throw new Error(`${wineName} has already been paid.`);
    } else if (this.wines[index].paid == false) {
      this.wines[index].paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }
  }
  openBottle(wineName) {
    let index = this.wines.findIndex((x) => x.wineName == wineName);
    if (index == -1) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    if (this.wines[index].paid == false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    this.wines.splice(index, 1);
    return `You drank a bottle of ${wineName}.`;
  }
  cellarRevision(wineType) {
    if (!wineType) {
      let result = [];
      let emptySlots = 0;
      if (this.space > this.wines.length) {
        emptySlots = this.space - this.wines.length;
      }
      let sortedWines = this.wines.sort((a, b) =>
        a.wineName.localeCompare(b.wineName)
      );

      result.push(`You have space for ${emptySlots} bottles more.`);
      result.push(`You paid ${this.bill}$ for the wine.`);
      for (const wine of sortedWines) {
        result.push(
          `${wine.wineName} > ${wine.wineType} - ` +
            (wine.paid == true ? "Has Paid." : "Not Paid.")
        );
      }
      return result.join("\n");
    } else {
      let index = this.wines.findIndex((x) => x.wineType == wineType);
      if (index == -1) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      } else {
        let result =
          `${this.wines[index].wineName} > ${this.wines[index].wineType} - ` +
          (this.wines[index].paid == true ? "Has Paid." : "Not Paid.");
        return result;
      }
    }
  }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2);
// console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
// console.log(selection.cellarRevision("Rose"));

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());
