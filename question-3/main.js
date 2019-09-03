"use strict"

//write code in here
const number = document.getElementById("number")
const numberInput = document.getElementById("numberInput")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

plusBtn.addEventListener("click", () => { 
    let userInput = parseInt(document.getElementById("numberInput").value)
    let displayNumber = parseInt(document.getElementById("number").textContent)
    number.textContent = displayNumber + userInput
    numberInput.value = 0
})

minusBtn.addEventListener("click", () => { 
    let userInput = parseInt(document.getElementById("numberInput").value)
    let displayNumber = parseInt(document.getElementById("number").textContent)
    number.textContent = displayNumber - userInput
    numberInput.value = 0
 })

resetBtn.addEventListener("click", () => { 
    number.textContent = 0
    numberInput.textContent = 0 }) 
