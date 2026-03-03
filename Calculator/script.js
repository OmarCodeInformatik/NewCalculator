const resultArea = document.getElementById("resultArea");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("resultButton");
const clearBtn = document.getElementById("deleteButton");
const piBtn = document.getElementById("piButton");
const sqrtBtn = document.getElementById("sqrtButton");
const squareBtn = document.getElementById("squareButton");
const bracketBtn = document.getElementById("bracketButton");
let openBracket = true; // merkt sich was als nächstes kommt

let currentInput = "";
let firstNumber = null;
let operator = null;

// Zahlen klicken
numbers.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        resultArea.textContent = currentInput;
    });
});

// Operator klicken
operators.forEach(button => {
    button.addEventListener("click", () => {
        firstNumber = parseFloat(currentInput);
        operator = button.dataset.op;
        currentInput = "";
    });
});

// Gleich klicken
equalBtn.addEventListener("click", () => {
    let secondNumber = parseFloat(currentInput);
    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    }

    resultArea.textContent = result;
    currentInput = result.toString();
});
// C klicken
clearBtn.addEventListener("click", () => {
    currentInput = "";
    firstNumber = null;
    operator = null;
    resultArea.textContent = "";
});
const moreBtn = document.getElementById("moreButtons");
const wrapper = document.querySelector(".calculator-wrapper");

moreBtn.addEventListener("click", () => {
    wrapper.classList.toggle("wrapper-active");
});
piBtn.addEventListener("click", () => {
    currentInput = Math.PI.toString();
    resultArea.textContent = currentInput;
});
sqrtBtn.addEventListener("click", () => {
    if (currentInput !== "") {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        resultArea.textContent = currentInput;
    }
});
squareBtn.addEventListener("click", () => {
    if (currentInput !== "") {
        currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        resultArea.textContent = currentInput;
    }
});
bracketBtn.addEventListener("click", () => {

    if (openBracket) {
        currentInput += "(";
        resultArea.textContent = currentInput;
        openBracket = false;
    } else {
        currentInput += ")";
        resultArea.textContent = currentInput;
        openBracket = true;
    }

});