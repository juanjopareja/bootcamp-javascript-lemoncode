// Constants
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];


// Data
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Random Availability Function
var getRandom = (a, b) => Math.random() < 0.5 ? a : b;

// Set Yes or No Function
var setYesOrNo = (item) => item ? "Sí" : "No";

// Free Hour Counter Array
var freeHour = new Array(8).fill(0);

// Fill Hour Counter
var fillCounter = (arr, bool) => {
    if (bool) arr[i] += 1;
}

// Random Work Hours
for (var person of myTeam) {
    console.log("Disponibilidad de " + person["name"]);

    for (var i = 0; i < person["availability"].length; i++) {
        var available = getRandom(true, false);
        fillCounter(freeHour, available);
        person["availability"][i] = available;
        console.log(WORK_HOURS[i] + ": " + setYesOrNo(available));
    }
}

// Free Time Function
var freeTime = (item) => {

    for (var i = 0; i < item.length; i++) {
        if (item[i] === 4) return console.log("Primer hueco libre encontrado " + WORK_HOURS[i]);
    }

    for (var i = 0; i < item.length; i++) {
        if (item[i] !== 4) return console.log("Lo siento. No hay hueco disponible en el equipo.");
    }
}

freeTime(freeHour);

