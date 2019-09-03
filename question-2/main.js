"use strict"

//write code in here
const numberElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const bodyElement = document.querySelector("body");

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

// make the button
for (let i = 2; i <= 10; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
        number += i;
        numberElement.textContent = number;
    });
    bodyElement.appendChild(button);
}

// iterate over the button

// select all of the new Btn
// const allNewBtns = document.querySelectorAll(".newBtn");

// allNewBtns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         number += index + 2;
//         numberElement.textContent = number;
//     });
// });

