const previousDisplayNum = document.querySelector(".previous-number")
const currentDisplayNum = document.querySelector(".current-number")
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")


let previousNum = "";
let currentNum = "";
let operator = "";


numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent)
    })
})

function handleNumber(number) {
    if (currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNum.textContent = currentNum;        
    } 
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleOperator(sign) {
    operator = sign;
    previousNum = currentNum;
    previousDisplayNum.textContent = previousNum + " " + sign;
    currentNum = "";
    currentDisplayNum.textContent = "";
}

equal.addEventListener("click", operate)

function operate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "x") {
        previousNum *= currentNum;
    } else if (operator === "/") {
        if (currentNum <= 0) {
            previousNum = "Error";
            displayAns()
            return;
        }
        previousNum /= currentNum;
    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayAns()
}

function displayAns() {
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
    operator = "";
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

clear.addEventListener ("click", clearCalculator)

function clearCalculator() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentDisplayNum.textContent = "0";
    previousDisplayNum.textContent = "";
}

