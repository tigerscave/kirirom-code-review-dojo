"use strict"

//write code in here
const plusButt = document.getElementById("plus")
const minusButt = document.getElementById("minus")
const resetButt = document.getElementById("reset")

const number = document.getElementById("number")

plusButt.addEventListener("click",() => number.innerHTML = parseInt(number.innerHTML) + 1)
minusButt.addEventListener("click",() => number.innerHTML = parseInt(number.innerHTML) - 1)
resetButt.addEventListener("click",() => number.innerHTML = 0)

