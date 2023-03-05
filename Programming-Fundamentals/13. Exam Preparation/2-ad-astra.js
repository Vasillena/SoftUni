function adAstra(input) {
  let pattern =
    /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;

  let exec = pattern.exec(input);
  let totalKcal = 0;
  let productsStore = [];

  while (exec) {
    let name = exec.groups["name"];
    let date = exec.groups["date"];
    let kcal = exec.groups["kcal"];

    totalKcal += Number(kcal);
    let currentProduct = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;
    productsStore.push(currentProduct);
    exec = pattern.exec(input);
  }
  let days = Math.floor(totalKcal / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  productsStore.forEach((p) => console.log(p));
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
