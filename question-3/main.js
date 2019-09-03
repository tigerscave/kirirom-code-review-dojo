"use strict"

// write conde in here
const addButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const text = document.getElementById("number");
let number = 0;
let inputNumber = 0;

function calculateAndDisplay(sign) {
    number = parseInt(document.getElementById("number").innerText);
    inputNumber = parseInt(document.getElementById("numberInput").value);
    if (sign == "+") {

        number += inputNumber;

    } else if (sign == "-") {
        number -= inputNumber;
    } else {
        number = 0;
    }
    text.textContent = number;
    document.getElementById("numberInput").value = "";
}

addButton.addEventListener("click", () => calculateAndDisplay("+"));
minusButton.addEventListener("click", () => calculateAndDisplay("-"));
resetButton.addEventListener("click", () => calculateAndDisplay(0));