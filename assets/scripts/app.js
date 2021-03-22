const dafaultResult = 0;
let currentResult = dafaultResult;
let logEntries = [];

// Gets input from the input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates ans wrights calculation log
function createAndWrightOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescriptions = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescriptions); // from vendor file
}

function wrightToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntrie = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntrie);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult -= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult -= enteredNumber;
    mathOperator = "/";
  }
  createAndWrightOutput(mathOperator, initialResult, enteredNumber);
  wrightToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function substract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");gg
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
