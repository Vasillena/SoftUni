function nXnMatrix(number) {
  let arr = [];

  for (let i = 0; i < number; i++) {
    let output = "";
    for (let j = 0; j < number; j++) {
      output += `${number} `;
    }
    arr.push(output);
  }
  console.log(arr.join("\n"));
}
nXnMatrix(3);

/*function nXnMatrix(number){
    
    let arr = [];

    let rowGenerator = () => {
        let singleRow = '';
        for (let j = 0; j < number; j++){
            singleRow += `${number} `;)
    }
    retutn singleRow;
};
 for(let i = 0; i < number; i++){
    console.log(rowGenerator());
 }
}
nXnMatrix(3); */
