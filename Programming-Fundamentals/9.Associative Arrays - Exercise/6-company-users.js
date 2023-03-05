function companyUsers(input) {
  let result = {};
  input.forEach((line) => {
    let [comanyName, personID] = line.split(" -> ");
    if (!result.hasOwnProperty(comanyName)) {
      result[comanyName] = [];
    }
    result[comanyName].push(personID);
  });

  let sortedCompanies = Object.entries(result).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sortedCompanies.forEach((el) => {
    let companyName = el[0];
    let allIDs = el[1];

    console.log(companyName);
    let uniqueIDs = new Set(allIDs);
    for (const id of uniqueIDs) {
      console.log(`-- ${id}`);
    }
  });
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
