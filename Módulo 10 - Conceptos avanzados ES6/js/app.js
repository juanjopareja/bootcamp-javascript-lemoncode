// EJERCICIOS ENTREGABLES
// OBJECT
const objectData = {
    id: 415193,
    name: "Juanjo",
    surname: "Pareja",
    age: 40
}

// ARRAYS
const arrayData = ["Juanjo", "Pareja", "García"];
const arrayData2 = ["actor", "acción"];
const arrayData3 = [12, 11, 7, 8, 45, 32];
const arrayData4 = ["Casa", "Coche", "Cuento"];

// STRINGS
const stringData = "Juanjo Pareja";


// 01
const hasId = ({ id }) => id ? true : false; 
console.log(hasId(objectData));

// 02
const head = ([ first ]) => first;
console.log(head(arrayData));

// 03
const tail = ([ , ...rest ]) => rest;
console.log(tail(arrayData));

// 04
const swapFirstToLast = ([ first, ...rest ]) => [ ...rest, first ];
console.log(swapFirstToLast(arrayData));

// 05
const excludeId = ({ id, ...rest }) => rest;
console.log(excludeId(objectData));

// 06
const wordsStartingWithA = words => words.filter(word => word.startsWith("a"));
console.log(wordsStartingWithA(arrayData2));

// 07
const concat = words => words.join(" | ");
console.log(concat(arrayData));

// 08
const multArray = (numArray, xNumber) => numArray.map(arrayElement => arrayElement * xNumber);
console.log(multArray(arrayData3, 2));

// 09
const calcMult = numArray => numArray.reduce((prevNum, currNum) => prevNum * currNum);
console.log(calcMult(arrayData3));


// EJERCICIOS EXTRA

// 10
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log(swapFirstSecond(arrayData));

// 11
const firstEqual = (stringArray, character) => stringArray.every(string => string.startsWith(character));
console.log(firstEqual(arrayData4, "C"));

// 12
const longest = (...arrays) => arrays.reduce((prevArray, currArray) => prevArray.length > currArray.length ? prevArray : currArray);
console.log(longest(arrayData, arrayData2));

// 13
const searchInStringV1 = (string, character) => Array.from(string.toLowerCase())
    .reduce((result, char) => char === character.toLowerCase() ? result + 1 : result, 0);
console.log(searchInStringV1(stringData, "J"));

// 14
const searchInStringV2 = (string, character) => Array.from(string.toLowerCase())
    .filter(char => char === character.toLowerCase()).length;
console.log(searchInStringV1(stringData, "p"));

// 15
const sortCharacters = string => Array.from(string.toLowerCase())
    .filter(charA => charA !== " ")
    .sort((charA, charB) => charA > charB ? 1 : -1);
console.log(sortCharacters(stringData));

// 16
const shout = words => words.map(word => `¡${word.toUpperCase()}!`);
console.log(shout(arrayData4));


// SHOPPING LIST
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto
const getIVA = (iva, products) => products.map(product => ({...product, iva: (product.price * iva).toFixed(2)}));
console.log(getIVA(0.21, shoppingCart));

// B. Ordena la lista de más a menos unidades
const shoppingCartCopy = [...shoppingCart];
const sortProducts = productList => productList.sort((a, b) => a.units < b.units ? 1 : -1);
console.log(sortProducts(shoppingCartCopy));

// C. Obtén el subtotal gastado en droguería
const subtotalDrugstore = products => products
    .filter((product) => product.category === "Droguería")
    .reduce((sum, product) => sum + (product.price * product.units), 0);
console.log(subtotalDrugstore(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría
const sortProductCategory = (iva, products) => products
    .sort((a, b) => a.category > b.category ? 1 : -1)
    .map(product => `${product.product} --> Precio Total: ${((product.price * (1 + iva) * product.units)).toFixed(2)}€`);
console.log(sortProductCategory(0.21, shoppingCart));