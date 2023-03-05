function pirates(input) {
  let cities = {};
  let array = [];

  while (input[0] !== "Sail") {
    let command = input.shift().split("||");
    let city = command[0];
    let population = Number(command[1]);
    let gold = Number(command[2]);

    let result = array.find((x) => x.city === city);
    let index = array.indexOf(result);

    if (result) {
      array[index].population += population;
      array[index].gold += gold;
    } else {
      cities = { city, population, gold };
      array.push(cities);
    }
  }
  while (input[0] !== "End") {
    let commands = input.shift().split("=>");
    let currentCommand = commands.shift();
    switch (currentCommand) {
      case "Plunder":
        let cityName = commands[0];
        let people = Number(commands[1]);
        let gold = Number(commands[2]);

        console.log(
          `${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );

        let result = array.find((x) => x.city === cityName);
        let index = array.indexOf(result);

        array[index].population -= people;
        array[index].gold -= gold;

        if (array[index].population <= 0 || array[index].gold <= 0) {
          array.splice(index, 1);
          console.log(`${cityName} has been wiped off the map!`);
        }
        break;
      case "Prosper":
        let cityName2 = commands[0];
        let gold2 = Number(commands[1]);

        if (gold2 < 0) {
          console.log(`Gold added cannot be a negative number!`);
        } else {
          let result = array.find((x) => x.city === cityName2);
          let index = array.indexOf(result);

          array[index].gold += gold2;
          console.log(
            `${gold2} gold added to the city treasury. ${cityName2} now has ${array[index].gold} gold.`
          );
        }
        break;
    }
  }
  if (array.length !== 0) {
    console.log(
      `Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`
    );
    array.forEach((c) =>
      console.log(
        `${c.city} -> Population: ${c.population} citizens, Gold: ${c.gold} kg`
      )
    );
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
