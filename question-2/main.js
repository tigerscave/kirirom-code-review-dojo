"use strict"

//write code in here
const number = document.getElementById("number")
const numberInput = document.getElementById("numberInput")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
var inputValue = parseInt(numberInput.value)
var displayValue = parseInt(number.innerHTML)

plusBtn.addEventListener("click", () => { number.innerHTML = displayValue + inputValue })

minusBtn.addEventListener("click", () => { number.innerHTML = displayValue - inputValue })

resetBtn.addEventListener("click", () => { number.innerHTML = 0 }) 