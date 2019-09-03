"use strict"

//write code in here
const number = document.getElementById("number")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
let value = 0

plusBtn.addEventListener("click", function(){
    number.textContent = value++
})

minusBtn.addEventListener("click", function(){
    number.textContent = value--
})

resetBtn.addEventListener("click", function(){
    number.textContent = 0
}) 