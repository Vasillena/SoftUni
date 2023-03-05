function oddOccurrences(input) {
  let resultObject = {};
  let allWords = input.split(" ").map((w) => w.toLowerCase());

  for (let i = 0; i < allWords.length; i++) {
    if (!resultObject.hasOwnProperty(allWords[i])) {
      resultObject[allWords[i]] = [];
    }
    resultObject[allWords[i]].push(i);
  }
  let sorted = Object.entries(resultObject).sort((a, b) => a[1][0] - b[1][0]);
  let result = "";

  for (const el of sorted) {
    if (el[1].length % 2 !== 0) {
      result += `${el[0]} `;
    }
  }
  console.log(result);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
