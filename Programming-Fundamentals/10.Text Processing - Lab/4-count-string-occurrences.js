function countString(text, word){

   let count = text.split(' ').filter(w => w === word).length;
   console.log(count);
}
countString('This is a word and it also is a sentence',
'is');
