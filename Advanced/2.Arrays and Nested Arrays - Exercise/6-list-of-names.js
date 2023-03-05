function listOfNames(array) {
  let sorted = array.sort((a, b) => a.localeCompare(b));
  let counter = 1;
  for (let el of array) {
    console.log(`${counter}.${el}`);
    counter++;
  }
  //input
  //.sort((a, b) => a.localeCompare(b))
  //.forEach((el, i) => {
    //console.log(`${i + 1}.${el});
  //})
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
