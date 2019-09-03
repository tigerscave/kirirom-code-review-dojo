"use strict"

//write code in here
const number = document.getElementById("number")
const numberInput = document.getElementById("numberInput")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
let displayedNumber = 0
let inputNumber = 0

plusBtn.addEventListener("click", () => { 
    inputNumber = parseInt(numberInput.value)
    displayedNumber = parseInt(number.textContent)
    number.textContent = displayNumber + userInput
    numberInput.value = 0
})

minusBtn.addEventListener("click", () => { 
    numberInput = parseInt(numberInput.value)
    displayedNumber = parseInt(number.textContent)
    number.textContent = displayNumber - userInput
    numberInput.value = 0
 })

resetBtn.addEventListener("click", () => { 
    number.textContent = 0
    numberInput.textContent = 0 }) 
