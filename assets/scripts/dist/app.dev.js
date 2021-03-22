"use strict";

// i have watched this video untill 02:52 and this repository was created after that
var defaultResult = 0;
var currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  var calcDescription = "".concat(resultBeforeCalc, " ").concat(operator, " ").concat(calcNumber);
  outputResult(currentResult, calcDescription);
}

function add() {
  var enteredNumber = getUserNumberInput();
  var intitialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', intitialResult, enteredNumber);
}

function subtract() {
  var enteredNumber = getUserNumberInput();
  var intitialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', intitialResult, enteredNumber);
}

function multiply() {
  var enteredNumber = getUserNumberInput();
  var intitialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', intitialResult, enteredNumber);
}

function divide() {
  var enteredNumber = getUserNumberInput();
  var intitialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', intitialResult, enteredNumber);
}

multiplyBtn.addEventListener('click', multiply);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);