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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  var logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry); // console.log(logEntry.operation);

  console.log(logEntries);
}

function add() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  var enteredNumber = getUserNumberInput();
  var initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

multiplyBtn.addEventListener("click", multiply);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);