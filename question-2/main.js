"use strict"
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

const numberElement = document.getElementById("number")

plusButton.addEventListener('click', () => {
    numberElement.innerHTML = parseInt(numberElement.innerHTML) + 1
})
minusButton.addEventListener('click', () => {
    numberElement.innerHTML = parseInt(numberElement.innerHTML) - 1
})
resetButton.addEventListener('click', () => {
    numberElement.innerHTML = 0
})
//write code in here
