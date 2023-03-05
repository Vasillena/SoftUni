function city(data) {
  for (const key of Object.keys(data)) {
    console.log(`${key} -> ${data[key]}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
