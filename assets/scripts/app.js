// i have watched this video untill 02:52 and this repository was created after that
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', intitialResult, enteredNumber)
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', intitialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', intitialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', intitialResult, enteredNumber)
}

multiplyBtn.addEventListener('click', multiply);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);

