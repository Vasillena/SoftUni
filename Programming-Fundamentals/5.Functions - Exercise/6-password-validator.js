function passwordValidator(password){

    let digitsCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;
    for (let i = 0; i < passwordLength; i++){
        let charNumber = password[i].charCodeAt();
        let isDigit = charNumber >= 48 && charNumber <= 57;
        let isSmallLetter = charNumber >= 97 && charNumber <= 122;
        let isBigLetter = charNumber >= 65 && charNumber <= 90;

        if(isDigit){
            digitsCounter++;
        }
        if(!isDigit && !isSmallLetter && !isBigLetter){
            isSymbol = true;
        }
    }
    if(password.length < 6 || password.length > 10){
        console.log('Password must be between 6 and 10 characters');
    }
    if(isSymbol){
        console.log('Password must consist only of letters and digits');
    }
    if(digitsCounter < 2){
        console.log('Password must have at least 2 digits');
    }
    if(digitsCounter >=2 && !isSymbol && (password.length >= 6 || password.length <= 10)){
        console.log('Password is valid');
    }
}
passwordValidator('logIn');