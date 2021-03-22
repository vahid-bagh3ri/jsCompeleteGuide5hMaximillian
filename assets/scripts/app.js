// i have watched this video untill 02:52 and this repository was created after that
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outPutResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
