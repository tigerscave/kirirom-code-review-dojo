"use strict"

//write code in here
const textNumber = document.getElementById("number")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

plusBtn.addEventListener('click', () => { textNumber.innerHTML++ })
minusBtn.addEventListener('click', () => { textNumber.innerHTML-- })
resetBtn.addEventListener('click', () => { textNumber.innerHTML = 0 })
