"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')

let num = 0
function ChangeValue(operation){
    switch(operation){
        case "plus":
            num+=1
            break
        case "minus":
            num-=1
            break
        case "reset":
            num = 0
    }
    textElement.innerHTML = num

}

plusButton.addEventListener('click', () => ChangeValue("plus"))
minusButton.addEventListener('click', () => ChangeValue("minus"))
resetButton.addEventListener('click',() => ChangeValue("reset"))