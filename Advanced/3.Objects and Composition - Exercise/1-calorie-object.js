function calorieObject(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const calories = array[i + 1];
    if (i % 2 == 0) {
      obj[element] = Number(calories);
    }
  }
  return obj;

  //return array.reduce((acc, currEL, index) => {
  //if (index % 2 == 0)acc[currEl] = Number(array[index + 1])
  //return acc;
  //}, {})
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
