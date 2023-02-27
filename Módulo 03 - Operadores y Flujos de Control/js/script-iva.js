// EJERCICIO 01 MOD03 - CÁLCULO IVA SIN FUNCIONES //

// Estructura de datos
const product = { 
    count: 3, 
    price: 5.20, 
    type: "Libro" 
};


// Tipos de IVA
const ivaAlimentacion = 0.1;
const ivaLibro = 0.04;
const ivaNormal = 0.21;
let tipoIva = "";


// Cálculo del total
let total, totalIva, totalFinal = 0;

if (product.count <= 0 || product.price <= 0) {
    product.count = 0; 
    product.price = 0;

} else  {
    total = product.count * product.price;

    switch (product.type) {
        case "Libro":
            totalIva = total * ivaLibro;
            tipoIva = "(4%)";
            break;
        case "Alimentación":
            totalIva = total * ivaAlimentacion;
            tipoIva = "(10%)";
            break;
        default:
            totalIva = total * ivaNormal;
            tipoIva = "(21%)";
            break;
    }

    totalFinal = total + totalIva;
}


// Resultados por consola
console.log("///// EJERCICIO 01 - IVA DE UN PRODUCTO /////");
console.log("");
console.log("Tipo Producto: " + product.type);
console.log("Precio: " + parseFloat(Math.round(product.price * 100) / 100).toFixed(2)  + "€");
console.log("Cantidad: " + product.count);
console.log("");
console.log("- Subtotal: " + parseFloat(Math.round(total * 100) / 100).toFixed(2) + "€");
console.log("- IVA" + tipoIva + ": " + parseFloat(Math.round(totalIva * 100) / 100).toFixed(2) + "€");
console.log("- Total: " + parseFloat(Math.round(totalFinal * 100) / 100).toFixed(2) + "€");
console.log("");
console.log("");


