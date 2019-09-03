"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')

let number = 0
function changeValue(operation){
    switch(operation){
        case "plus":
            number += 1
            break
        case "minus":
            number -= 1
            break
        case "reset":
            number = 0
    }
    textElement.textContent = number
}

plusButton.addEventListener('click', () => changeValue("plus"))
minusButton.addEventListener('click', () => changeValue("minus"))
resetButton.addEventListener('click', () => changeValue("reset"))