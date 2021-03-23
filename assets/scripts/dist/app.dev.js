"use strict";

// i have watched this video untill 02:52 and this repository was created after that
var defaultResult = 0;
var currentResult = defaultResult;
var logEntries = []; // Gets input from input field

function getUserNumberInput() {
  return parseInt(usrInput.value);
} // Generates and writes calculation log


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  var calcDescription = "".concat(resultBeforeCalc, " ").concat(operator, " ").concat(calcNumber);
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  var logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  };
  logEntries.push(logEntry); // console.log(logEntry.operation);

  console.log(logEntries);
}

function subtract() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

multiplyBtn.addEventListener("click", multiply);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);