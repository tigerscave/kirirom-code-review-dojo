"use strict"

//write code in here
const numberElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
let number = 0;

plusBtn.addEventListener("click", () => {
    number += 1;
    numberElement.textContent = number;
});

minusBtn.addEventListener("click", () => {
    number -= 1;
    numberElement.textContent = number;
});

resetBtn.addEventListener("click", () => {
    number = 0;
    numberElement.textContent = number;
});