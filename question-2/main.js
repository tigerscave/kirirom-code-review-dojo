"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')

let num = 0
function ChangeValue(operation){
    switch(operation){
        case plusButton:
            num+=1
            break
        case minusButton:
            num-=1
            break
        case resetButton:
            num = 0
    }
    textElement.innerHTML = num

}

plusButton.addEventListener('click', () => ChangeValue(plusButton))
minusButton.addEventListener('click', () => ChangeValue(minusButton))
resetButton.addEventListener('click',() => ChangeValue(resetButton))