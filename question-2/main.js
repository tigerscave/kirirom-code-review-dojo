"use strict"
//write code in here
const textNumber = document.getElementById("number")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

for (let i = 2; i < 11; i++) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `${i}`;
    btn.setAttribute("onClick", `changeNum(${i})`)
    document.body.appendChild(btn);
}

function changeNum(number) {
    textNumber.innerHTML = parseInt(textNumber.innerHTML) + number;
}

plusBtn.addEventListener('click', () => { changeNum(1) })
minusBtn.addEventListener('click', () => { changeNum(-1) })
resetBtn.addEventListener('click', () => { textNumber.innerHTML = 0 })
