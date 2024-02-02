function burgerBus(input) {
  let citiesVisited = Number(input.shift());
  let totalProfit = 0;

  for (let i = 1; i <= citiesVisited; i++) {
    let currentGroup = input.splice(0, 3);
    let city = currentGroup[0];
    let income = Number(currentGroup[1]);
    let expenses = Number(currentGroup[2]);

    if (i % 3 == 0) {
      expenses += expenses * 0.5;
    }
    if (i % 5 == 0) {
      income -= income * 0.1;
    }
    if (i % 3 == 0 && i % 5 == 0) {
      expenses = Number(currentGroup[2]);
    }
    let profit = income - expenses;
    totalProfit += profit;
    console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
/*burgerBus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]); */
burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
