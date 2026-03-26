function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x + y;
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
            add(num1,num2);
        case "-":
            subtract(num1,num2);
        case "*":
            multiply(num1,num2);
        case "/":
            divide(num1,num2);
    }
}