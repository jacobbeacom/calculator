/* Calculator */
/* We'll need a few global variables to start, so that each function can correctly
access and modify these variables */

let num1;
let num2;
let operator;
let displayValue;
let results;



function operate(num1, num2, operator) {
    // takes the two integers and the operator function as input
    // turns the inputs into an expression
    // evaluate the expression
    // return the result
    if (operator == "+") {
       return +num1 + +num2
    } else if (operator == "-") {
       return num1 - num2;
    } else if (operator == "/" && num2 != 0) {
       return num1 / num2;
    } else if (operator == "*") {
       return num1 * num2;
    } else {
        return "Error"
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
const displayContent = document.getElementById('display');
const equalsButton = document.getElementById('equals');
const numberButtons = document.getElementsByClassName('number');

//disables the operand buttons if length if display has a length of 12 or greater.

function displayControl() { 
    let cont = displayContent.textContent; 
    if (cont.length >= 12) {
        equalsButton.disabled = true;
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].disabled = true;
        }
    }   else {
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].disabled = false;
    }
}}



// adds an event listener to all number buttons and updates the display with the users selection

for (let i = 0; i < numberButtons.length; i++) {
    let buttonValue = numberButtons[i].textContent;
        if (numberButtons[i].textContent == ".") {
            numberButtons[i].addEventListener('click', () => {
                display(buttonValue);
                numberButtons[i].disabled = true;
            })}
            else {
            let value = parseInt(buttonValue);
            numberButtons[i].addEventListener('click', () => {
                display(value);
                displayControl();
            }
    )}};



const operatorButtons = document.getElementsByClassName('operator');

// adds event listeners to all operator buttons, re-enables the decimal button, sets the selected operator as the operator variable, and changes both display paragraphs to reflect selections.

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        equalsButton.disabled = false;
        operator = operatorButtons[i].textContent;
        let disp = document.getElementById('display');
        let altDisp = document.getElementById('previousInput');
        num1 = disp.textContent;
        altDisp.textContent = num1 + " " + operator;
        disp.textContent = "";
        displayControl();
})}

//Takes both number variables and calls the operate function to do the math with the provided inputs.


    equalsButton.addEventListener('click', () => {
        numberButtons[9].disabled = false;
        let disp = document.getElementById('display');
        let altDisp = document.getElementById('previousInput');
        num2 = disp.textContent;
        altDisp.textContent = "";
        let newOperator = operator.replace(/["']/g, "");
        let result = operate(num1, num2, newOperator);
        num1 = result;
            if (num1 > 999999999999) {
                disp.textContent = "Result too large to display"
            } else {
                disp.textContent = result;
}});

//adds an event listener to the clear button and clears all variables as well as both displays of information.

const clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', () => {
        numberButtons[9].disabled = false;
        let disp = document.getElementById('display');
        let altDisp = document.getElementById('previousInput');
        num1 = null;
        num2 = null;
        operator = null;
        newOperator = null;
        results = null;  
        disp.textContent = "";
        altDisp.textContent = "";
        displayControl();
    });