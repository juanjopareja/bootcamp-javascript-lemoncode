// Constants
var REGULAR_TYPE = 21;
var LOWER_TYPE = 4;
var EXEMPT_TYPE = 0;

// Product List
var products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

// Functions
// Create Element General Function
var createProduct = (i) => {

    // Product Row
    var div = document.createElement("div");
    div.setAttribute("class", "product-row");

    // Product Index
    var pIndex = document.createElement("p");
    pIndex.setAttribute("class", "product-index");

    // Product Name
    var pName = document.createElement("p");
    pName.setAttribute("class", "product-name");

    // Product Units
    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("class", "product-units");
    input.setAttribute("min", 0);
    input.setAttribute("max", maxStock(i));
    input.setAttribute("value", 0);
    input.addEventListener("change", updateUnits);

    // Appends
    var main = document.getElementById("product-list");
    main.appendChild(div);

    var main2 = document.getElementsByClassName("product-row")[i];
    main2.appendChild(pIndex);
    main2.appendChild(pName);
    main2.appendChild(input);
}

// Create Price Tag
var createPrice = (i) => {
    // Product Price Tag
    var productPrice = document.createElement("span");
    productPrice.setAttribute("class", "product-price");

    var main3 = document.getElementsByClassName("product-name")[i];
    main3.appendChild(productPrice);
}

// Insert Index Function
var insertIndex = (i) => document.getElementsByClassName("product-index")[i].innerHTML = (i + 1) + ".";

// Insert Name Function
var insertName = (i, name) => document.getElementsByClassName("product-name")[i].innerHTML = name;

// Insert Price Function
var insertPrice = (i, price) => {
    createPrice(i);
    document.getElementsByClassName("product-price")[i].innerHTML = " - " + price + "€/ud.";
}

// Max Stock Product
var maxStock = (i) => maxStockProduct = products[i].stock;

// Print Product List
var printProductList = () => {
    for (let i = 0; i < products.length; i++) {
        createProduct(i);
        insertIndex(i);
        insertName(i, products[i].description);
        insertPrice(i, products[i].price);
    }
}

// Disabled Button
var disabledButton = () => {
    var buttonFlag = true;
    for (var product of products) {
        if (product.units > 0) {
            buttonFlag = false;
        }
    }

    document.getElementById("btn").disabled = buttonFlag;
}

// Uptade Units Product
var updateUnits = () => {
    for (let i = 0; i < products.length; i++) {
        var modifiedUnit = document.getElementsByClassName("product-units")[i].value;
        products[i].units = modifiedUnit;
    }  
    disabledButton();
}

// Round Function
var roundNumber = (number) => parseFloat(Math.round(number * 100) / 100).toFixed(2);

// Subtotal Function
var subTotalProduct = () => {
    var subTotal = 0;
    for (var product of products) subTotal += product.units * product.price;
    return subTotal;
}

// IVA Function
var ivaProduct = () => {
    var ivaTotal = 0;
    for (var product of products) ivaTotal += product.units * product.price * (product.tax / 100);
    return ivaTotal;
}

// Total Function
var totalPriceProduct = () => subTotalProduct() + ivaProduct();

// Final Price Function
var finalPrice = () => {
    document.getElementById("subtotal").innerHTML = roundNumber(subTotalProduct());
    document.getElementById("iva").innerHTML = roundNumber(ivaProduct());
    document.getElementById("total").innerHTML = roundNumber(totalPriceProduct());
}

// Events
window.addEventListener("load", printProductList);
document.getElementById("btn").disabled = true;
document.getElementById("btn").addEventListener("click", finalPrice);