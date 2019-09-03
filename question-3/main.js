"use strict"
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

const numberElement = document.getElementById("number")
const numberInput = document.getElementById("numberInput")


plusButton.addEventListener('click', () => {
    let userInput = parseInt(numberInput.value)
    let displayNumber = parseInt(numberElement.textContent)
    numberElement.textContent =  displayNumber + userInput
    numberInput.value = 0
})
minusButton.addEventListener('click', () => {
    let userInput = parseInt(numberInput.value)
    let displayNumber = parseInt(numberElement.textContent)
    numberElement.textContent = displayNumber - userInput
    numberInput.value = 0
})
resetButton.addEventListener('click', () => {
    numberElement.textContent = 0
    numberInput.value = 0
})

// write conde in here