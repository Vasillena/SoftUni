function revealWords(words, text){

    let wordsArray = words.split(', ');
    wordsArray.forEach(word => {
        const match = `${'*'.repeat(word.length)}`;
        text = text.replace(match, word);
    });
    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');