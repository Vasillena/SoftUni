function charactersInRange(firstChar, secondChar) {
  let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
  let resultString = '';

  for (let i = rangeStart + 1; i < rangeEnd; i++) {
    let singleChar = String.fromCharCode(i);
    resultString += `${singleChar} `;
  }
  console.log(resultString);
}

charactersInRange("#", ":");
