function evenPositionelement(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result += arr[i] + " ";
    }
  }
  console.log(result);
}
evenPositionelement(["20", "30", "40", "50", "60"]);
