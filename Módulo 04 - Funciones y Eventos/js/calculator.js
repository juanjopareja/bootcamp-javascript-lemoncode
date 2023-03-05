// Get Operand
var getNumber = (operandId) => document.getElementById(operandId).valueAsNumber;

// Set Result
var setResult = (basicOperation) => document.getElementById("total-result").innerHTML = basicOperation;

// Round Result
var roundResult = (operation) => parseFloat(Math.round(operation * 100) / 100);

// Empty Operand
var emptyCondition = (cond1, cond2) => isNaN(getNumber(cond1)) || isNaN(getNumber(cond2));
var emptyOperand = () => document.getElementById("total-result").innerHTML = "Error";

// Add Operation
var addOperation = () => emptyCondition("data-operand1", "data-operand2") ? emptyOperand() : submitAdd();
var addNumber = () => getNumber("data-operand1") + getNumber("data-operand2");
var submitAdd = () => setResult(roundResult(addNumber()));

// Subtract Operation
var subtractOperation = () => emptyCondition("data-operand1", "data-operand2") ? emptyOperand() : submitSubtract();
var subtractNumber = () => getNumber("data-operand1") - getNumber("data-operand2");
var submitSubtract = () => setResult(roundResult(subtractNumber()));

// Multiply Operation
var multiplyOperation = () => emptyCondition("data-operand1", "data-operand2") ? emptyOperand() : submitMultiply();
var multiplyNumber = () => getNumber("data-operand1") * getNumber("data-operand2");
var submitMultiply = () => setResult(roundResult(multiplyNumber()));

// Divide Operation
var divideOperation = () => emptyCondition("data-operand1", "data-operand2") ? emptyOperand() : submitDivide();
var divideNumber = () => getNumber("data-operand1") / getNumber("data-operand2");
var submitDivide = () => setResult(roundResult(divideNumber()));

// Reset Operation
var resetOperand = (operandId) => document.getElementById(operandId).value = "";

function resetOperation () {
    resetOperand("data-operand1");
    resetOperand("data-operand2");
    setResult("");
}

// Events
document.getElementById("add-operation").addEventListener("click", addOperation);
document.getElementById("subtract-operation").addEventListener("click", subtractOperation);
document.getElementById("multiply-operation").addEventListener("click", multiplyOperation);
document.getElementById("divide-operation").addEventListener("click", divideOperation);
document.getElementById("reset-operation").addEventListener("click", resetOperation);

