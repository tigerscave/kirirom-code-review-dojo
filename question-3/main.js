"use strict"

// write conde in here
const numberElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const numberInput = document.getElementById("numberInput");
let number = 0;

plusBtn.addEventListener("click", () => {
    if (numberInput.value != "") {
        number += parseInt(numberInput.value);
        resetInputAndshowNumber(number);
    }
});

minusBtn.addEventListener("click", () => {
    if (numberInput.value != "") {
        number -= parseInt(numberInput.value);
        resetInputAndshowNumber(number);
    }
});

resetBtn.addEventListener("click", () => {
    if (number.value != "") {
        number = 0;
        resetInputAndshowNumber(number);
    }
});

function resetInputAndshowNumber(number) {
    numberElement.textContent = number;
    numberInput.value = '';
}


