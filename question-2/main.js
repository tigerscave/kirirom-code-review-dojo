"use strict"
"use strict"

//write code in here
const textNumber = document.getElementById("number")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

increment.addEventListener('click', () => { textNumber.innerHTML++ })
decrement.addEventListener('click', () => { textNumber.innerHTML-- })
reset.addEventListener('click', () => { textNumber.innerHTML = 0 })
