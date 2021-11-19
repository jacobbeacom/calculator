/* Calculator */
/* We'll need a few global variables to start, so that each function can correctly
access and modify these variables */

let num1;
let num2;
let operator;
let displayValue;
let results;


function add(num1, num2) {
    // takes two integers as input
    // add integer1 and integer2
    // return the result
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    // takes two integers as input
    // Subtracts integer2 from integer1
    // return the result
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    // takes two integers as input
    // multiplies integer 1 and integer 2
    // return the result
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    // takes two integers as input
    // divides integer 1 by integer 2
    // return the result
    let result = num1 / num2;
    return result;
}

function operate(num1, num2, operator) {
    // takes the two integers and the operator function as input
    // turns the inputs into an expression
    // evaluate the expression
    // return the result
    if (operator == "+") {
       return num1 + num2
    } else if (operator == "-") {
       return num1 - num2;
    } else if (operator == "/") {
       return num1 / num2;
    } else if (operator == "*") {
       return num1 * num2;
    }
    
}

/* Display
Updates the display p tag when user clicks a button. Add that buttons string value to the display paragraph. 
When user clicks an operator, save the total conj value as num1, save the selected operator as operator. 
Move a copy of the string to the previousInput paragraph above, add the selected operator to it.
When user selects the first number button, clear the display paragraph and repopulate it with the selected button.
*/

function display(value) {
   let disp =  document.getElementById('display');
   disp.textContent +=  value;
}

function operatorDisplay(operator) {
    let disp = document.getElementById('display');
    num1 = disp.textContent;
    let prevInp = document.getElementById('previousInput');
    prevInp.textContent = num1 + ' ' + operator;
}


const numberButtons = document.getElementsByClassName('number');

for (let i = 0; i < numberButtons.length; i++) {
    let buttonValue = numberButtons[i].textContent;
    let value = parseInt(buttonValue);
    numberButtons[i].addEventListener('click', () => {
        display(value);
    }
    )};

const operatorButtons = document.getElementsByClassName('operator');

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        operator = operatorButtons[i].textContent;
        let disp = document.getElementById('display');
        let altDisp = document.getElementById('previousInput');
        num1 = disp.textContent;
        altDisp.textContent = num1 + " " + operator;
        disp.textContent = "";
})}

const equalsButton = document.getElementById('equals');

    equalsButton.addEventListener('click', () => {
    let disp = document.getElementById('display');
    let altDisp = document.getElementById('previousInput');
    num2 = disp.textContent;
    altDisp.textContent = "";
    let newOperator = operator.replace(/["']/g, "");
    let result = operate(num1, num2, newOperator);
    num1 = result;
    disp.textContent = result;
    
});