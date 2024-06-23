// script.js

let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.textContent = value;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay('0');
}

function setOperation(operator) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperation) {
        secondOperand = parseFloat(currentInput);
        firstOperand = performCalculation();
    }
    currentOperation = operator;
    currentInput = '';
}

function performCalculation() {
    switch (currentOperation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return firstOperand;
    }
}

function calculateResult() {
    if (currentOperation && currentInput !== '') {
        secondOperand = parseFloat(currentInput);
        const result = performCalculation();
        updateDisplay(result);
        currentInput = result;
        firstOperand = null;
        secondOperand = null;
        currentOperation = null;
    }
}
