function towns(list) {
  let townInfo = {};

  for (const line of list) {
    //let splittedLine = line.split(' | ');
    //let townName = splittedLine[0];
    //let latitude = splittedLine[1];
    //let longitude = splittedLine[2];

    let [townName, latitude, longitude] = line.split(" | ");

    townInfo.town = townName;
    townInfo.latitude = Number(latitude).toFixed(2);
    townInfo.longitude = Number(longitude).toFixed(2);

    console.log(townInfo);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
