"use strict"

// write conde in here
const numberElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const numberInput = document.getElementById("numberInput");
let resultNumber = 0;

plusBtn.addEventListener("click", () => {
    if (validateNumberInput(numberInput)) {
        resultNumber += parseInt(numberInput.value);
        resetInputAndShowNumber(resultNumber);
    }
});

minusBtn.addEventListener("click", () => {
    if (validateNumberInput(numberInput)) {
        resultNumber -= parseInt(numberInput.value);
        resetInputAndShowNumber(resultNumber);
    }
});

resetBtn.addEventListener("click", () => {
    resultNumber = 0;
    resetInputAndShowNumber(resultNumber);

});

function resetInputAndShowNumber(resultNumber) {
    numberElement.textContent = resultNumber;
    numberInput.value = '';
};

function validateNumberInput(numberInput) {
    if (isNaN(numberInput.value)) {
        alert("Invalid Error");
    } else if (numberInput.value != "") {
        return true
    }
}