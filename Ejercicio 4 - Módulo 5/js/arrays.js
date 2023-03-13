// const bookings = [
//     { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false, succeeded: true },
//     { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false, succeeded: true },
//     { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true, succeeded: false },
//     { id: 3, price: 37.50, count: 2, room: "standard", prepaid: true, succeeded: true },
//     { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true, succeeded: false }
// ];

// console.log("-------1");
// const js = [25, 2.05, 1000, 63, 4.01, -9];
// for (let i = 0; i < js.length; i++) {
//     console.log("Posición " + [i+1] + ": " + js[i]);
// }

// console.log("-------2");
// const js2 = [14, -9, 2, 2.02, 53, 0, -9];
// for (let i = 0; i < js2.length; i++) {
//     if (js2[i] > 0) console.log(js2[i]);
// }


// console.log("-------3");
// var mayor0 = [];
// var menor0 = [];

// for (let i = 0; i < js2.length; i++) {
//     if (js2[i] >= 0) {
//         mayor0.push(js2[i]);
//     } else {
//         menor0.push(js2[i]);
//     }
// }

// console.log(mayor0);
// console.log(menor0);

console.log("---- Ejercicio 4 ----");

const js2 = [14, -9, 2, 2.02, -9, 53, 53.4, 0, -9];
console.log(js2);

for (let i = 0; i < js2.length; i++) {
    if (js2[i] > 0) {   
        js2.splice(i, 1);
    }
}
console.log(js2);


// console.log("---- Ejercicio 5 ----");

// const js = [ 
//     { id: 1, name: "Jhon", }, 
//     { id: 2, name: "Doe", }, 
//     { id: 3, name: "Clara", }, 
//     { id: 4, name: "Elisa", }, 
//     { id: 4, name: "Pedro", }, 
// ]

// console.log(js.length);

// for (let i = js.length; i >= 0; i--) {
//     console.log(js[i]);
// }

// console.log("---- Ejercicio 6 ----");

// const js = [ 
//     { id: 1, name: "Jhon", age: 25, }, 
//     { id: 2, name: "Doe", age: 8, }, 
//     { id: 3, name: "Clara", age: 15, }, 
//     { id: 4, name: "Elisa", age: 30, }, 
//     { id: 4, name: "Pedro", age: 18, }, 
// ]

// for (const personas of js) {
//     if (personas.age >= 18) console.log(personas);
// }

// console.log("---- Ejercicio 7 ----");

// const js = [ 
//     { id: 1, name: "Jhon", age: 25, }, 
//     { id: 2, name: "Doe", age: 8, }, 
//     { id: 3, name: "Clara", age: 15, }, 
//     { id: 4, name: "Elisa", age: 30, }, 
//     { id: 4, name: "Pedro", age: 18, }, 
// ]

// const mayores18 = [];
// const menores18 = [];

// for (const personas of js) {
//     if (personas.age >= 18) {
//         mayores18.push(personas);
//     } else {
//         menores18.push(personas);
//     }

// }
// console.log(mayores18);
// console.log(menores18);

// console.log("---- Ejercicio 8 ----");

// const js = [
//     { 
//         hoteId: 1,
//         hotelName: "Jhon",
//         availableRooms: 25,
//         price: 10.20,
//     },
//     {
//         hoteId: 2,
//         hotelName: "Doe",
//         availableRooms: 8,
//         price: 4.25,
//     },
//     {
//         hoteId: 3,
//         hotelName: "Clara",
//         availableRooms: 15,
//         price: 14.30,
//     },
//     {
//         hoteId: 4,
//         hotelName: "Elisa",
//         availableRooms: 30,
//         price: 10,
//     },
//     {
//         hoteId: 4,
//         hotelName: "Pedro",
//         availableRooms: 10,
//         price: 8.10,
//     },
// ]

// const nuevoHotel = [];

// for (const hotel of js) {
//     incrementaPrecio(hotel);
// }

// imprimeHotel(nuevoHotel);


// function incrementaPrecio (hotel) {
//     if (hotel.availableRooms < 10) {
//         hotel.price += 10;
//         return nuevoHotel.push(hotel);
//     }
// }

// function imprimeHotel (hotel) {
//     return console.log(hotel);
// }

// console.log("---- Ejercicio 10 ----");

// const js = [ 
//     { hoteId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.20, }, 
//     { hoteId: 2, hotelName: "Hotel 2", availableRooms: 8, price: 4.25, }, 
//     { hoteId: 3, hotelName: "Hotel 3", availableRooms: 15, price: 14.30, }, 
//     { hoteId: 4, hotelName: "Hotel 4", availableRooms: 30, price: 10, }, 
//     { hoteId: 5, hotelName: "Hotel 5", availableRooms: 10, price: 8.10, }, 
// ]

// var getHotel = () => document.getElementById("textBox").value;

// function imprimir (hotel) {
//     var bandera = false;
//     getHotel(hotel);

//     for (const hoteles of js) {
//         if (hoteles.hotelName === getHotel()) bandera = true;
//     }

//     bandera ? console.log("El hotel existe") : console.log("El hotel no existe");
// }


// document.getElementById("myButton").addEventListener("click", imprimir);