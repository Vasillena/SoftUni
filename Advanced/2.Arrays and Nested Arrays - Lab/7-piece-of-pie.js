function pieceOfPie(pies, firstPie, secondPie) {
  const firstIndex = pies.indexOf(firstPie);
  const lastIndex = pies.indexOf(secondPie);

  return pies.slice(firstIndex, lastIndex + 1);
}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
