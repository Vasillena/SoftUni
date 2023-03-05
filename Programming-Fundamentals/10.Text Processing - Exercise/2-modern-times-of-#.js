function modernTimes(string) {
  const words = string.split(" ");

  words.forEach((word) => {
    if (word.startsWith("#") && word.length > 1) {
      let isLetter = true;
      let temp = "";
      for (let i = 1; i < word.length; i++) {
        const char = word[i].toLowerCase();
        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
          isLetter = false;
          break;
        } else {
          temp += word[i];
        }
      }
      if (isLetter) {
        console.log(temp);
      }
    }
  });
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
