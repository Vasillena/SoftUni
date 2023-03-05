function inventory(list) {
  let heroes = [];

  list.forEach((line) => {
    let [name, level, items] = line.split(" / ");
    let currentHero = {
      name,
      level: Number(level),
      items,
    };
    heroes.push(currentHero);
  });
  heroes.sort((a, b) => a.level - b.level);

  heroes.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
