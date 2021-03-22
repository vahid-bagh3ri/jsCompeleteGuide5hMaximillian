// i have watched this video untill 02:52 and this repository was created after that
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', intitialResult, enteredNumber)
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', intitialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', intitialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const intitialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', intitialResult, enteredNumber)
}

multiplyBtn.addEventListener('click', multiply);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);

