const clearEntry = document.querySelector('.clear-entry');
const clear = document.querySelector('.clear');

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

const equals = document.querySelector('.equals');

const numScreen = document.querySelector('input');

const list = document.querySelector('ul');

let entries = [];

let num1 = '';
let num2 = '';
let currentOperator = '';

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

function entryList(entries) {
    list.innerHTML = '';
    for (let i = 0; i < entries.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = entries[i];
        list.appendChild(li);        
    }    
}

window.addEventListener("load", () => {
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
        });
    });

    equals.addEventListener("click", () => {
        let result = operate(num1, num2, currentOperator);
        let operation = `${num1} ${currentOperator} ${num2} = ${result}`;
        entries.push(operation);

        list.innerHTML = '';
        entryList(entries);

        numScreen.value = result;

        num1 = result;
        num2 = '';
        currentOperator = '';
    });

    clearEntry.addEventListener("click", () => {
        numScreen.value = '';
    });

    clear.addEventListener("click", () => {
        numScreen.value = '';

        entries = [];
        list.innerHTML = '';

        num1 = '';
        num2 = '';
        currentOperator = '';
    });
});