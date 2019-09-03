"use strict"

// write conde in here
const numberElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const numberInput = document.getElementById("numberInput");
let resultNumber = 0;

plusBtn.addEventListener("click", () => {
    if (numberInput.value != "") {
        resultNumber += parseInt(numberInput.value);
        resetInputAndShowNumber(number);
    }
});

minusBtn.addEventListener("click", () => {
    if (numberInput.value != "") {
        resultNumber -= parseInt(numberInput.value);
        resetInputAndShowNumber(number);
    }
});

resetBtn.addEventListener("click", () => {
    resultNumber = 0;
    resetInputAndShowNumber(resultNumber);
});

function resetInputAndShowNumber(number) {
    numberElement.textContent = resultNumber;
    numberInput.value = '';
}