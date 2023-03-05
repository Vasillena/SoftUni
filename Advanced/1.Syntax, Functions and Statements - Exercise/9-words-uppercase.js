function wordsUppercase(words) {
  const regex = /[A-z0-9]+/g;
  let result = words.match(regex);
  console.log(result.join(", ").toUpperCase());
}
wordsUppercase("Hi, how are you?");
