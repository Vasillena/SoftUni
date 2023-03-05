function convert(name, lastName, hairColor) {
  let info = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  let infoJSON = JSON.stringify(info);
  console.log(infoJSON);
}
convert("George", "Jones", "Brown");
