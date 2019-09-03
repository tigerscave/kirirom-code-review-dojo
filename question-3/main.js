"use strict"

// write conde in here
const textNumber = document.getElementById("number")
const input = document.getElementById("numberInput")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

function changeNum(number) {
    textNumber.innerHTML = parseInt(textNumber.innerHTML) + parseInt(number)
}

plusBtn.addEventListener('click', () => { changeNum(input.value) })
minusBtn.addEventListener('click', () => { changeNum(`-${input.innerHTML}`) })
reset.addEventListener('click', () => { textNumber.innerHTML = 0 })
