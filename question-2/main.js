"use strict"

//write code in here

const textNumber = document.getElementById("number")
const increment = document.getElementById("plus")
const decrement = document.getElementById("minus")
const reset = document.getElementById("reset")

increment.addEventListener('click', () => { textNumber.innerHTML++ })
decrement.addEventListener('click', () => { textNumber.innerHTML-- })
reset.addEventListener('click', () => { textNumber.innerHTML = 0 })
