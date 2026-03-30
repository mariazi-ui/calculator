const clearEntry = document.querySelector('.clear-entry');
const clear = document.querySelectorAll('.clear');

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const equals = document.querySelector('.equals');

const numScreen = document.querySelector('input');

const list = document.querySelector('ul');

let entries = [];

let num1 = '';
let num2 = '';
let currentOperator = '';

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}


function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

function entryList(entries) {
    
}

numScreen.value = '';

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (currentOperator === '') {
            numScreen.value += digit.innerHTML;
            num1 = parseFloat(numScreen.value);
        } else {
            numScreen.value += digit.innerHTML;
            num2 = parseFloat(numScreen.value);
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (num1 !== '') {
            currentOperator = operator.innerHTML;
            numScreen.value = '';
        }
    })
});

equals.addEventListener("click", () => {
    let operation = `${num1} ${currentOperator} ${num2}`;
    entries.push(operation);
    numScreen.value = operate(num1, num2, currentOperator);
});

clearEntry.addEventListener("click", () => {
    numScreen.value = '';
});

clear.addEventListener("click", () => {
    numScreen.value = '';

    entries.forEach((entry) => entries.pop(entry));
})