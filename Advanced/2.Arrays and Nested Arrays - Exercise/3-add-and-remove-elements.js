function addAndRemoveElement(array) {
  const newArray = [];
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    const currentCommand = array[i];
    if (currentCommand === "add") {
      newArray.push(counter++);
    } else if (currentCommand === "remove") {
      newArray.pop(counter++);
    }
  }
  if (!newArray.length) {
    console.log("Empty");
  } else {
    console.log(newArray.join("\n"));
  }
}
addAndRemoveElement(["add", "add", "remove", "add", "add"]);
