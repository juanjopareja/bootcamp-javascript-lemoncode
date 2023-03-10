// Variables
var partialTotal = 0;
var lastNumber;
var operationType;

// Get Operand
var getNumber = () => parseFloat(document.getElementById("data-operand").value);

// New Number
var newNumber = () => lastNumber = getNumber();

// Set Result
var setResult = () => document.getElementById("data-operand").value = roundResult(partialTotal);

// Round Result
var roundResult = (variable) => Math.round(variable * 100) / 100;

// Enable/Disable Total Result
var switchTotalResult = (bool) => document.getElementById("total-operation").disabled = bool;

// Empty Operand
var conditional = (operation) => emptyCondition1() || emptyCondition2() ? emptyOperand() : operation;
var emptyCondition1 = () => document.getElementById("data-operand").value === "";
var emptyCondition2 = () => document.getElementById("data-operand").value === "error";
var emptyOperand = () => document.getElementById("data-operand").value = "error";

// Operation Type
function selectOperation() {

    switch (operationType) {
        case "addNumber":
            addNumbers();
            break;
        
        case "subtractNumber":
            subtractNumbers();
            break;

        case "multiplyNumber":
            multiplyNumbers();
            break;

        case "divideNumber":
            divideNumbers();
            break;

        default:
            break;
    }
}

var addNumbers = () => partialTotal += lastNumber;
var subtractNumbers = () => partialTotal -= lastNumber;
var multiplyNumbers = () => partialTotal *= lastNumber;
var divideNumbers = () => partialTotal /= lastNumber;

// Add Operation
var addOperation = () => conditional(addNumber());

function addNumber () {
    partialTotal = getNumber();
    operationType = "addNumber";
    switchTotalResult(false);
}

// Subtract Operation
var subtractOperation = () => conditional(subtractNumber());

function subtractNumber () {
    partialTotal = getNumber();
    operationType = "subtractNumber";
    switchTotalResult(false);
}

// Multiply Operation
var multiplyOperation = () => conditional(multiplyNumber());

function multiplyNumber() {
    partialTotal = getNumber();
    operationType = "multiplyNumber";
    switchTotalResult(false);
}

// Divide Operation
var divideOperation = () => conditional(divideNumber());

function divideNumber () {
    partialTotal = getNumber();
    operationType = "divideNumber";
    switchTotalResult(false);
}

// Total Operation
var totalOperation = () => emptyCondition1() || emptyCondition2() ? emptyOperand() : totalNumber();

function totalNumber () {
    newNumber();
    selectOperation();
    setResult();
    switchTotalResult(true);
}

// Reset Operation
var resetOperand = (operandId) => document.getElementById(operandId).value = "";

function resetOperation () {
    resetOperand("data-operand");
    switchTotalResult(false);
    partialTotal = 0;
}

// Events
document.getElementById("add-operation").addEventListener("click", addOperation);
document.getElementById("subtract-operation").addEventListener("click", subtractOperation);
document.getElementById("multiply-operation").addEventListener("click", multiplyOperation);
document.getElementById("divide-operation").addEventListener("click", divideOperation);
document.getElementById("reset-operation").addEventListener("click", resetOperation);
document.getElementById("total-operation").addEventListener("click", totalOperation);

