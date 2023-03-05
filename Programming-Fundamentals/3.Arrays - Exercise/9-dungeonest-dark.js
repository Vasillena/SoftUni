function solve(array) {
  let health = 100;
  let coins = 0;
  let monster = "";
  let isFinish = true;

  input = array[0];
  input = input.split("|");

  for (let i = 0; i < input.length; i++) {
    let room = input[i];
    room = room.split(" ");
    let item = room[0];
    let num = Number(room[1]);

    if (item === "potion") {
      let currentHealth = health; //70
      health += num; // 70 + 10 = 80
      if (health > 100) {
        console.log(`You healed for ${100 - currentHealth} hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${num} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
      continue;
    } else if (item === "chest") {
      let foundCoins = num;
      coins += foundCoins;
      console.log(`You found ${foundCoins} coins.`);
      continue;
    } else {
      monster = item;
      health -= num;
    }
    if (health > 0) {
      console.log(`You slayed ${monster}.`);
    } else {
      console.log(`You died! Killed by ${monster}.`);
      console.log(`Best room: ${i + 1}`);
      isFinish = false;
      break;
    }
  }
  if (isFinish) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
