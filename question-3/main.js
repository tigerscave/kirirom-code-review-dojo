"use strict"
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

const numberElement = document.getElementById("number")
const numberInput = document.getElementById("numberInput")

let numberInputValue = 0
let displayedNumber = 0

plusButton.addEventListener('click', () => {
    numberInputValue = parseInt(numberInput.value)
    displayedNumber = parseInt(numberElement.textContent)
    if (isNaN(numberInputValue)){
        alert("Invalid error")
    }
    else{
        numberElement.textContent =  displayedNumber + numberInputValue
        numberInput.value = 0
    }
    
})
minusButton.addEventListener('click', () => {
    numberInputValue = parseInt(numberInput.value)
    displayedNumber = parseInt(numberElement.textContent)
    if (isNaN(numberInputValue)){
        alert("Invalid error")
    }
    else{
        numberElement.textContent = displayedNumber - numberInputValue
        numberInput.value = 0
    }
    
})
resetButton.addEventListener('click', () => {
    numberElement.textContent = 0
    numberInput.value = 0
})

// write conde in here