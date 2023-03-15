const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];


// Ejercicio 1. Listar los productos del carrito
console.log("---- Ejercicio 1:  -----");
console.log("");

printCarrito(carrito);


// Ejercicio 2. Eliminar un producto del carrito
console.log("---- Ejercicio 2 -----");
console.log("");

deleteProduct(54657);
printCarrito(carrito);


// Ejercicio 3. Calcular el precio total del carrito
console.log("---- Ejercicio 3 -----");
console.log("");

var total = totalPrice(carrito);
discount(total);
shippingCosts(carrito);
console.log("");


// Ejercicio 4. Filtrar productos Premium
console.log("---- Ejercicio 4 -----");
console.log("");

premiumList(carrito);


// Functions
// Print Carrito
function printCarrito(carrito) {
    for (const product of carrito) {
        listCarrito(product);
    }
}

// List Carrito
function listCarrito(product) {
    for (const attribute in product) {
        console.log(attribute.toUpperCase() + ": " + product[attribute]);
    }
    console.log("");
}

// Delete Product
function deleteProduct(idNumber) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idNumber) {
            carrito.splice(i, 1);
        }
    }
}

// Total Price
function totalPrice(carrito) {
    
    var total = 0;

    for (const product of carrito) {
        total += product.price * product.count;
    }

    console.log("Precio total: " + total);
    return total;
}

console.log("");

// Shipping Costs
function shippingCosts(carrito) {

    var shippingFlag = true;

    for (const product of carrito) {
        if (!product.premium) {
            shippingFlag = false;
        }
    }

    if (shippingFlag) {
        console.log("Sin gastos de envío");
    } else {
        console.log("Con gastos de envío");
    }
}

// Discount
function discount(total) {
    
    if (total > 50) {
        total *= 0.95;
        console.log("Tienes un 5% de descuento");
        console.log("Precio final: " + total);
    }
}

// Premium List
function premiumList(carrito) {
    for (const product of carrito) {
        if (product.premium) {
            listCarrito(product);
        }
    }
}

function printResult() {
    for (const product of carrito) {
        var createEl = document.createElement('li');
        document.getElementById("product-list").appendChild(createEl);
        createEl.innerText = product.name;
     }
}

// Events
document.getElementById("button").addEventListener("click", printResult);
