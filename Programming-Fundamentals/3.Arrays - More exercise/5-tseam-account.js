function solve(input) {
  let games = input.shift().split(" ");
  let commands = input.slice();
  let currentCommand = commands.shift();

  while (currentCommand != "Play!") {
    let lineArgs = currentCommand.split(" ");
    let command = lineArgs[0];
    let game = lineArgs[1];
    let gameWithExpansion = lineArgs[1].split("-");
    let gameWithoutExpansion = gameWithExpansion[0];
    let expansion = gameWithExpansion[1];
    switch (command) {
      case "Install":
        if (!games.includes(game)) {
          games.push(game);
        }
        break;
      case "Uninstall":
        if (games.includes(game)) {
          let itemIndex = games.indexOf(game);
          if (itemIndex > -1) {
            games.splice(itemIndex, 1);
          }
        }
        break;
      case "Update":
        if (games.includes(game)) {
          let itemIndex = games.indexOf(game);
          if (itemIndex > -1) {
            games.splice(itemIndex, 1);
            games.push(game);
          }
        }
        break;
      case "Expansion":
        if (games.includes(gameWithoutExpansion)) {
          let itemIndex = games.indexOf(gameWithoutExpansion);
          if (itemIndex > -1) {
            games.splice(
              itemIndex,
              1,
              gameWithoutExpansion,
              gameWithoutExpansion + ":" + expansion
            );
          }
        }
    }
    currentCommand = commands.shift();
  }
  console.log(games.join(" "));
}
solve([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
