"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')

let number = 0
function changeValue(operation){
    switch(operation){
        case plusButton:
            number+=1
            break
        case minusButton:
            number-=1
            break
        case resetButton:
            number = 0
    }
    textElement.innerHTML = number

}

plusButton.addEventListener('click', () => changeValue(plusButton))
minusButton.addEventListener('click', () => changeValue(minusButton))
resetButton.addEventListener('click',() => changeValue(resetButton))