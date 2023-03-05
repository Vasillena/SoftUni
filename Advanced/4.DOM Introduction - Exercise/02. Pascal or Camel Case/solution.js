function solve() {
  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");

  const toCamel = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  };

  if (convention === "Pascal Case") {
    resultElement.textContent = toPascal(input);
  } else if (convention === "Camel Case") {
    resultElement.textContent = toCamel(input);
  } else {
    resultElement.textContent = "Error!";
  }
}

/* if (convention === 'Camel Case){
  for (let i = 0; i < text.length; i++){
    if (text[i] === ' '){
      result += (text[i + 1].toUpperCase());
      i++;
    }else {
      result += text[i].toLowerCase();
    }
  }
}else if (convention === 'Pascal Case'){
  result += (text[0].toUpperCase());
  for (let i = 1; i < text.length; i++){
      if (text[i] === ' '){
      result += (text[i + 1].toUpperCase());
      i++;
    }else {
      result += text[i].toLowerCase();
    }
  }
}else{
  result = 'Error!
}
*/
