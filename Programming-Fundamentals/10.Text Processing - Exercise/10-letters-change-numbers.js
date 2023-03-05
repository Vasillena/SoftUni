function lettersChangeNumbers(input) {
  let array = input.split(" ");
  let result = 0;
  let finalResult = 0;
  let space = "";

  /*for (word of array) {
    let spaceIndex = array.indexOf(space);
    if (spaceIndex > -1) {
      array.splice(spaceIndex, 1);
    }
  } */

  for (word of array) {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];
    let number = Number(word.substring(1, word.length - 1));

    if (word.length === 0){
        result = 0;
    }else{

    if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
      result = number / (firstLetter.toLocaleLowerCase().charCodeAt() - 96);
    }
    if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
      result = number * (firstLetter.charCodeAt() - 96);
    }
    if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
      result -= lastLetter.toLocaleLowerCase().charCodeAt() - 96;
    }
    if (lastLetter.charCodeAt() >= 97 && lastLetter.charCodeAt() <= 122) {
      result += lastLetter.charCodeAt() - 96;
    }
    finalResult += result;
  }
  }

  console.log(finalResult.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');