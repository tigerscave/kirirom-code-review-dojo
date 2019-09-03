"use strict"

// write conde in here
const appleButton = document.getElementById("apple");
const bananaButton = document.getElementById("button");
const orangeBtn = document.getElementById("orange");
const resetBtn = document.getElementById("reset");
const textElement = document.getElementById("text");



appleButton.addEventListener("click", () => {
    textElement.textContent = "APPLE";
});

bananaButton.addEventListener('click', () => {
    textElement.textContent = "BANANA";
});

orangeBtn.addEventListener('click', () => {
    textElement.textContent = "ORGANE";
});

resetBtn.addEventListener('click', () => {
    textElement.textContent = "-";
});
