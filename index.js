const previousDisplayNum = document.querySelector(".previous-number")
const currentDisplayNum = document.querySelector(".current-number")


let previousNum = "";
let currentNum = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equal = document.querySelector(".equal")

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

equal.addEventListener("click", calculate)
function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
    } 
    previousDisplayNum.textContent = "";
    currentDisplayNum.textContent = previousNum;
}