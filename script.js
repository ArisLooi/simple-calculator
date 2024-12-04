function add() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber + secondNumber;
  alert('The result is: ' + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber - secondNumber;
  alert('The result is: ' + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber * secondNumber;
  alert('The result is: ' + result);
}

function divide() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber / secondNumber;
  alert('The result is: ' + result);
}

function simpleInterest() {
  const principal = parseFloat(prompt('Enter the initial balance($): '));
  const interestRate = parseFloat(prompt('Enter the interest rate(%): ')) / 100;
  const years = parseFloat(prompt('Enter the investment duration (years): '));
  const simpleInterest = principal * interestRate * years;
  alert('The simple interest is: ' + simpleInterest);
}

function compoundInterest() {
  const principal = parseFloat(prompt('Enter the initial balance($): '));
  const interestRate = parseFloat(prompt('Enter the interest rate(%): ')) / 100;
  const years = parseFloat(prompt('Enter the investment duration (years): '));
  const compoundInterest = principal * (1 + interestRate) ** years;
  alert('The compound interest is: ' + compoundInterest);
}
