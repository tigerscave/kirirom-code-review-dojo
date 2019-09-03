"use strict"

// write conde in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberInput = document.getElementById('numberInput')
const numberElement = document.getElementById('number')

let number = 0
function changeValue(operation){

    let inputValue = parseInt(numberInput.value)
    if(Number.isNaN(inputValue)) {
        if(numberInput.value.lenght == 0){
            inputValue = 0
        } else {
            window.alert("Invalid Value")
            return
        }
    }
    switch(operation){
        case "plus":
            number += inputValue
            break
        case "minus":
            number -= inputValue
            break
        case "reset":
            number = ""
            numberInput.value = ""
    }
    numberElement.textContent = number
}


plusButton.addEventListener('click', () => changeValue("plus"))
minusButton.addEventListener('click', () => changeValue("minus"))
resetButton.addEventListener('click', () => changeValue("reset"))