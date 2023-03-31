/**
 * CAMBIO DE BILLETES Y MONEDAS
 */

// Dates
var moneyDates = [ 
    { 
        name : "200 €", 
        value : 200,
        stock : 5
    },
    { 
        name : "100 €", 
        value : 100,
        stock : 10
    },
    { 
        name : "50 €", 
        value : 50,
        stock : 10
    },
    { 
        name : "20 €", 
        value : 20,
        stock : 10
    },
    { 
        name : "10 €", 
        value : 10,
        stock : 10
    },
    { 
        name : "5 €", 
        value : 5,
        stock : 0
    },
    { 
        name : "2 €", 
        value : 2,
        stock : 20
    },
    { 
        name : "1 €", 
        value : 1,
        stock : 20
    },
    { 
        name : "0.50 €", 
        value : 0.50,
        stock : 20
    },
    { 
        name : "0.20 €", 
        value : 0.20,
        stock : 20
    },
    { 
        name : "0.10 €", 
        value : 0.10,
        stock : 20
    },
    { 
        name : "0.05 €", 
        value : 0.05,
        stock : 20
    },
    { 
        name : "0.02 €", 
        value : 0.02,
        stock : 20
    },
    { 
        name : "0.01 €", 
        value : 0.01,
        stock : 20
    }
]


// Create Change Row Function
var createChangeRow = () => {
    var pIndex = document.createElement("p");
    pIndex.setAttribute("class", "money-change-row");
    pIndex.setAttribute("id", "money-change-row");

    var main = document.getElementById("money-change-values");
    main.appendChild(pIndex);
}

// Insert Change Values Function
var insertChangeValues = (ind, value) => document.getElementsByClassName("money-change-row")[ind].innerHTML = value;

// Insert Not Enough Money Function
var notEnoughMoney = (value) => document.getElementById("money-change-row").innerHTML = value;

// Get Function
var getInput = id => document.getElementById(id).value;

// Set Function
var setText = (entire, moneyValue) => {
    var moneyTextValues = ["billete", "billetes", "moneda", "monedas"]
    var euroText = ["euro", "euros"];

    if (entire === 1 && moneyValue === 1) {
        return inputRoute = entire + " " + moneyTextValues[2] + " de " + moneyValue + " " + euroText[0];
    } else if (entire === 1 && (moneyValue < 1 || moneyValue === 2)) {
        return inputRoute = entire + " " + moneyTextValues[2] + " de " + moneyValue + " " + euroText[1];
    } else if (entire > 1 && moneyValue === 1) {
        return inputRoute = entire + " " + moneyTextValues[3] + " de " + moneyValue + " " + euroText[0];
    } else if (entire > 1 && (moneyValue < 1 || moneyValue === 2)) {
        return inputRoute = entire + " " + moneyTextValues[3] + " de " + moneyValue + " " + euroText[1];
    } else if (entire === 1 && moneyValue > 2) {
        return inputRoute = entire + " " + moneyTextValues[0] + " de " + moneyValue + " " + euroText[1];
    } else if (entire > 1 && moneyValue > 2) {
        return inputRoute = entire + " " + moneyTextValues[1] + " de " + moneyValue + " " + euroText[1];
    }
}

// Money Stock Function
var moneyStock = (moneyType) => moneyType["stock"] > 0 ? true : false;

// Money Stock Rest
var stockRest = (moneyType, numMon) => moneyType["stock"] -= numMon;

// Entire Value Function
var entireValue = item => Math.floor(item);

// Round Function
var roundNumber = (number) => parseFloat(Math.round(number * 100) / 100).toFixed(2);

// Count Stock Money Function
var countMoney = (moneyValue, stockValue, totalMoney, entire) => {
    if (entire > 0 && stockValue > 0) totalMoney += moneyValue * stockValue;
    return totalMoney;
}

// Enough Money Function
var enoughMoney = (moneyRest, totalMoney) => totalMoney > moneyRest ? true : false;

// Money Quantity Function
var moneyQuantity = (moneyRest) => {
        
    var rowCounter = 0;
    var totalMoney = 0;

    for (var moneyType of moneyDates) {          
        var entire = entireValue(roundNumber(moneyRest / moneyType["value"]));
        totalMoney = countMoney(moneyType["value"], moneyType["stock"], totalMoney, entire);
        enough = enoughMoney(moneyRest, totalMoney);
    }

    for (var moneyType of moneyDates) {   
        var entire = entireValue(roundNumber(moneyRest / moneyType["value"]));
        
        if (entire > 0 && moneyStock(moneyType) && enough) {
            createChangeRow();
            var count = 0;

            while (moneyStock(moneyType) && entire > 0) {
                moneyRest -= moneyType["value"];
                moneyType["stock"]--;
                count++;
                entire--;
                insertChangeValues(rowCounter, setText(count, moneyType["value"]));
            }

            rowCounter++;
        } 
    }

    if (!enough) {
        createChangeRow();
        notEnoughMoney("No hay suficiente cambio en la máquina. Disculpe las molestias");
    }
}

// Total Calculation Function
var totalCalculation = () => {
    var moneyRest = getInput("total-paid") - getInput("total-import");
    document.getElementById("change-value").innerHTML = roundNumber(moneyRest) + " €";
    moneyQuantity(moneyRest);
}

// Events
document.getElementById("calculate").addEventListener("click", totalCalculation);
