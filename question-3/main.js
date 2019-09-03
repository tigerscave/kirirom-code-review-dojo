"use strict"

//write code in here
const number = document.getElementById("number")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
var value = 0

plusBtn.addEventListener("click", function(){
    number.innerHTML = value++
})

minusBtn.addEventListener("click", function(){
    number.innerHTML = value--
})

resetBtn.addEventListener("click", function(){
    number.innerHTML = 0
}) 