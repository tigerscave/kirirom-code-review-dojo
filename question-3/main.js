"use strict"

//write code in here
const numberElement = document.getElementById("number")
const numberInput = document.getElementById("numberInput")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")
let displayedNumber = 0
let inputNumber = 0


plusBtn.addEventListener("click", () => {
    inputNumber = parseInt(numberInput.value)
    displayedNumber = parseInt(numberElement.textContent)
    if(isNaN(inputNumber)){
        alert("Invalid error")
    }
    else{
        numberElement.textContent = displayedNumber + inputNumber
        numberInput.value = 0
    }
})

minusBtn.addEventListener("click", () => { 
    inputNumber = parseInt(numberInput.value)
    displayedNumber = parseInt(numberElement.textContent)
    if(isNaN(inputNumber)){
        alert("Invalid error")
    }
    else{
        numberElement.textContent = displayedNumber - inputNumber
        numberInput.value = 0
    }
})

resetBtn.addEventListener("click", () => { 
    numberElement.textContent = 0
    numberInput.textContent = 0 
}) 

