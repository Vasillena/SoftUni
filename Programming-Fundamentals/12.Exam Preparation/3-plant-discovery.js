function plantDiscovery(input) {
  let plantCount = Number(input.shift());
  let plants = {};
  //plants = {
  // 'Arnoldii': {
  // rarity: 10,
  // ratings: [2, 3, 4, 5],
  // }
  // }

  for (let i = 0; i < plantCount; i++) {
    let line = input.shift();
    let [name, rarity] = line.split("<->");
    plants[name] = {
      rarity: Number(rarity),
      ratings: [],
    };
  }
  let command = input.shift();
  while (command != "Exhibition") {
    let [commandName, args] = command.split(": ");
    let [plantName, argument] = args.split(" - ");

    if (plants[plantName]) {
      switch (commandName) {
        case "Rate":
          let rating = Number(argument);
          plants[plantName].ratings.push(rating);
          break;
        case "Update":
          let rarity = Number(argument);
          plants[plantName].rarity = rarity;
          break;
        case "Reset":
          plants[plantName].ratings = [];
          break;
      }
    } else {
      console.log("error");
    }
    command = input.shift();
  }

  console.log("Plants for the exhibition:");
  for (const name in plants) {
    let sum = 0;
    let ratingsCount = plants[name].ratings.length;

    for (const rating of plants[name].ratings) {
      sum += rating;
    }

    let averageRating = sum / ratingsCount;
    if (!averageRating) {
      averageRating = 0;
    }
    console.log(
      `- ${name}; Rarity: ${
        plants[name].rarity
      }; Rating: ${averageRating.toFixed(2)}`
    );
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
