function addressBook(input) {
  let addressBook = {};

  for (const line of input) {
    let [name, address] = line.split(":");

    addressBook[name] = address;
  }
  let addressBookEntries = Object.entries(addressBook);
  addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

  for (const entry of addressBookEntries) {
    let [name, address] = entry;

    console.log(`${name} -> ${address}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
