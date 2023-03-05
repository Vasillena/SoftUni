function emojiDetector(input) {
  let text = input.shift();
  let emojiCount = 0;
  let threshold = 1;
  let coolEmojis = [];
  let digits = text.match(/\d/g);
  for (const digit of digits) {
    let number = Number(digit[0]);
    threshold *= number;
  }

  let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);

  for (const emojiMatch of emojiMatches) {
    let emoji = emojiMatch[0];
    let emojiName = emojiMatch.groups.name;
    emojiCount++;

    let emojiCoolness = 0;
    for (let i = 0; i < emojiName.length; i++) {
      emojiCoolness += emojiName.charCodeAt(i);
    }
    if (emojiCoolness >= threshold) {
      coolEmojis.push(emoji);
    }
  }
  console.log(`Cool threshold: ${threshold}`);
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  for (const emoji of coolEmojis) {
    console.log(emoji);
  }
}
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
