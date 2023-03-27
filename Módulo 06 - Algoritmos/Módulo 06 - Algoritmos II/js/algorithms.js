// ENIGMA
var plainAlphabet = "abcdefghijklmnñopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pañ:sdfg!hjklz¡xcv)bnm ";

// Get Text
var getText = (id) => document.getElementById(id).value;

// Set Text
var setText = (id, result) => document.getElementById(id).innerHTML = result;

// Search Text
var searchText = (source, searchAlphabet, targetAlphabet) => {
    var sourceText = getText(source);
    var tempText = "";

    for (var sourceChars of sourceText) {
        for (let i = 0; i < searchAlphabet.length; i++) {
            if (sourceChars === searchAlphabet[i]) tempText += targetAlphabet[i];
        }
    }
    
    return tempText;
}

// Encrypt Text
var encrypt = () => {
    var resultText = searchText("plain-text", plainAlphabet, encryptedAlphabet);
    setText("decrypt-text", resultText);
}

// Decrypt Text
var decrypt = () => {
    var resultText = searchText("decrypt-text", encryptedAlphabet, plainAlphabet);
    setText("plain-text", resultText);
}

// Events
document.getElementById("encrypt-button").addEventListener("click", encrypt);
document.getElementById("decrypt-button").addEventListener("click", decrypt);



// RANDOM GENERATOR
var randomPick = (n, min, max) => {
    var arrayNumbers = [];
    var randomNumber;
    var range = max - min + 1;

    while (arrayNumbers.length < n) {
        randomNumber = Math.floor(Math.random() * range) + min;
        if (arrayNumbers.indexOf(randomNumber) === -1) {
            arrayNumbers.push(randomNumber);
        }
    }

    console.log("------");
    console.log(arrayNumbers);
}

randomPick(6, 1, 49); // Apuesta automática de primitiva
randomPick(15, 1, 15); // Combinación de bolas de billar
randomPick(7, 45, 62); // Tirada aleatoria de dado

