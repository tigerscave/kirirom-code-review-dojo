"use strict"

//write code in here
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

const number = document.getElementById("number")

plusBtn.addEventListener("click",() => number.innerHTML = parseInt(number.innerHTML) + 1)
minusBtn.addEventListener("click",() => number.innerHTML = parseInt(number.innerHTML) - 1)
resetBtn.addEventListener("click" , () => number.innerHTML = 0)
