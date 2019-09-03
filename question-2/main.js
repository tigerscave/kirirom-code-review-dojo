"use strict"

//write code in here

for(let i = 2; i <= 10; i++){
    var button = document.createElement("BUTTON")
    button.textContent = i
    document.body.appendChild(button)
}

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')
const numberTwoButton = document.getElementById('numberTwo')

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
            break
        case "two":
            number += 2
            break
    }
    textElement.textContent = number
}

plusButton.addEventListener('click', () => changeValue("plus"))
minusButton.addEventListener('click', () => changeValue("minus"))
resetButton.addEventListener('click', () => changeValue("reset"))
numberTwoButton.addEventListener('click', () => changeValue("numberTwo"))