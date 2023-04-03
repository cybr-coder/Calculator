const keys = document.querySelector('.calculator-keys')
const display = document.querySelector('.display')
const calculator = document.querySelector('.container')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if (!action) {
            if (displayedNum === '0') {
              display.textContent = keyContent
            } else {
                display.textContent += keyContent
            }
        }
        if (action === 'decimal') {
            display.textContent += '.';
        }
        
    }
})

























//Basic Operation Functions
// function add (a, b) {
//     return a + b
// } 

// function subtract (a, b) {
//     return a - b
// } 

// function multiply (a, b) {
//     return a * b
// } 

// function divide (a, b) {
//     return a / b
// } 
