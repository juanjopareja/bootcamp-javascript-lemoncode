// Ejercicio 1. Validar IBAN
console.log("EJERCICIO 1. VALIDAR IBAN");

// Caso 1. Validar que se informa con 2 letras y 22 números
console.log("IBAN - Caso 1:");
const valueIBAN1 = "ES6600190020961234567890";
const patternIBAN1 = /^[A-Z]{2}\d{22}$/

console.log(valueIBAN1, patternIBAN1.test(valueIBAN1));
console.log("");

// Caso 2. Validar que se puedan incluir espacios en ciertas áreas
const valueIBAN2 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
const patternIBAN2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/
console.log("IBAN - Caso 2:");

for (var values of valueIBAN2) {
    console.log(values + " ", patternIBAN2.test(values));
}
console.log("");

// Caso 3. Extraer el código de país y el dígito de control
const patternCountry = /^([A-Z]{2}\d{2}\s?)(\d{4}\s?){4}\d{4}$/
console.log("IBAN - Caso 3:");

for (var values of valueIBAN2) {
    console.log(values);
    console.log("Código de país y dígito de control: ", patternCountry.exec(values)[1]);
}
console.log("");



// Ejercicio 2. Validar matrícula de coche
console.log("EJERCICIO 2. VALIDAR MATRÍCULA DE COCHE");
const valueCarsReg = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

// Caso 1. Validar que está compuesta por 4 dígitos y 3 letras
console.log("MATRÍCULA - Caso 1:");
const patternCarsReg1 = /^\d{4}\s?-?[A-Z]{3}$/

for (var values of valueCarsReg) {
    console.log(values + " ", patternCarsReg1.test(values));   
}
console.log("");

// Caso 2. Extraer la parte numérica y las letras
console.log("MATRÍCULA - Caso 2:");
const patternCarsReg2 = /^(\d{4})\s?-?([A-Z]{3})$/

for (var i = 0; i < valueCarsReg.length; i++) {
    console.log(valueCarsReg[i])
    console.log("Números: ", patternCarsReg2.exec(valueCarsReg[i])[1], " Letras: ", patternCarsReg2.exec(valueCarsReg[i])[2]);
}
console.log("");



// Ejercicio Opcional. Extraer imágenes de un fichero HTML
console.log("EJERCICIO OPCIONAL. EXTRAER IMÁGENES DE UN HTML");

// Caso 1. Extraer el contenido src de una sola línea
console.log("IMÁGENES - Caso 1:");
const valueImage = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
const patternImage = /src=["|'](.{1,})["|']/i

console.log(valueImage);
console.log("Imagen de \"src\": " + patternImage.exec(valueImage)[1]);
console.log("");

// Caso 2. Extraer el contenido src de todos los objetos img de un HTML
console.log("IMÁGENES - Caso 2:");
const patternImages = /https:\/\/.{1,}\.(png|jpg)/gim

const valueImages = `<html>
    <body>
        <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
        <h1>ejemplo</h1>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
    </body>
</html>`;

console.log(valueImages);
for (var i = 0; i < valueImages.match(patternImages).length; i++) {
    console.log("Imagen " + [i+1] + " de \"src\": ", valueImages.match(patternImages)[i]);
}
console.log("");



// Ejercicio Opcional. Validar sintaxis tarjeta de crédito
console.log("EJERCICIO OPCIONAL. VALIDAR SINTAXIS TARJETA DE CRÉDITO");

// Caso 1. Validar formato con espacios y guiones o sin ambos
console.log("TARJETA DE CRÉDITO - Caso 1:");
const valueCreditCard = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];
const patternCreditCard = /^(5[1-5]\d{2})\s?-?(\d{4})\s?-?(\d{4})\s?-?(\d{4})$/

for (var values of valueCreditCard) {
    console.log(values + " ", patternCreditCard.test(values));   
}
console.log("");

// Caso 2. Extraer los grupos de 4 dígitos
console.log("TARJETA DE CRÉDITO - Caso 2:");
for (var i = 0; i < valueCreditCard.length; i++) {
    console.log(valueCreditCard[i])
    console.log("Grupo 1: ", patternCreditCard.exec(valueCreditCard[i])[1], 
                " Grupo 2: ", patternCreditCard.exec(valueCreditCard[i])[2],
                " Grupo 3: ", patternCreditCard.exec(valueCreditCard[i])[3],
                " Grupo 4: ", patternCreditCard.exec(valueCreditCard[i])[4]);
}
console.log("");



// Ejercicio Opcional. Expresiones Regulares
console.log("EJERCICIO OPCIONAL. EXPRESIONES REGULARES");

// Caso 1. Comprobar si una clave es fuerte o no
console.log("EXPRESIONES REGULARES - Caso 1:");

const valueStrong = "constRaseña5$";
const patternStrong = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
console.log(" - Clave fuerte: " + valueStrong, patternStrong.test(valueStrong));

const valueModerate = "conTr4seña";
const patternModerate = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/
console.log(" - Clave moderada: " + valueModerate, patternModerate.test(valueModerate));
console.log("");

// Caso 2. Validar que una URL esté bien formada
console.log("EXPRESIONES REGULARES - Caso 2:");
const valueURL = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];
const patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

for (var values of valueURL) {
    console.log(values + " ", patternURL.test(values));   
}
console.log("");

// Caso 3. Validar que un color en Hexadecimal esté bien formado
console.log("EXPRESIONES REGULARES - Caso 3:");
const valueHex = ["#CBA9E55", "#C7FFE0", "#fff66c"];
const patternHex = /^#([0-9A-Fa-f]{3}){1,2}$/

for (var values of valueHex) {
    console.log(values + " ", patternHex.test(values));   
}
console.log("");