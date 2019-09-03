"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')

let num = 0
function func(id){
    switch(id){
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

plusButton.addEventListener('click', () => func("plus"))
minusButton.addEventListener('click', () => func("minus"))
resetButton.addEventListener('click',() => func("reset"))