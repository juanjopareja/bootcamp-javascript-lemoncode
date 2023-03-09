var room = {
    standard: 100,
    junior: 120,
    suite: 150,
    spa: 20,
    individual: 0.75,
    double: 1,
    triple: 1.25,
    parking: 10
};


// Get Option
var getOption = (id) => document.getElementById(id);

// Room Price
var roomPrice = () => room[getOption("room-type").value];

// SPA Price
var spaPrice = () => getOption("spa-use").checked ? room.spa : 0;

// Number Nights
var numberNights = () => getOption("number-nights").value;

// Room + Spa Price
var roomSpaPrice = () => roomPrice() + spaPrice();

// Night Ocupation Price
var nightOcupationPrice = () => roomSpaPrice() * room[getOption("room-ocupation").value];

// Parking Nights Price
var parkingNightsPrice = () => getOption("parking-nights").value * room.parking;

// Total Price
var totalPrice = () => nightOcupationPrice() * numberNights() + parkingNightsPrice();

// Print Result
var printResult = () => document.getElementById("total-result").innerHTML = totalPrice();

// Events
window.addEventListener("load", printResult);
document.getElementById("room-type").addEventListener("change", printResult);
document.getElementById("spa-use").addEventListener("change", printResult);
document.getElementById("number-nights").addEventListener("change", printResult);
document.getElementById("room-ocupation").addEventListener("change", printResult);
document.getElementById("parking-nights").addEventListener("change", printResult);

