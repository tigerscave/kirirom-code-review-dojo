"use strict"

//write code in here
const number = document.getElementById("number")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")

plus.addEventListener("click", function(){
    number.innerHTML = parseInt(number.innerHTML) + 1;
})

minus.addEventListener("click", function(){
    number.innerHTML = parseInt(number.innerHTML) - 1;
})

reset.addEventListener("click", function(){
    number.innerHTML = parseInt("0")
})