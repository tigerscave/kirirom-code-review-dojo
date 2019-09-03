"use strict"

// write conde in here
const numberElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const numberInput = document.getElementById("numberInput");
let number = 0;

plusBtn.addEventListener("click", () => {
    number += parseInt(numberInput.value);
    // numberInput.style.display = "none";
    numberElement.textContent = number;
});

minusBtn.addEventListener("click", () => {
    number -= parseInt(numberInput.value);
    // numberInput.style.display = "non/e";
    numberElement.textContent = number;
});

resetBtn.addEventListener("click", () => {
    number = 0;
    numberInput.value = "";
    numberElement.textContent = number;
})
// resetBtn.addEventListener("clic")



// minusBtn.addEventListener("")