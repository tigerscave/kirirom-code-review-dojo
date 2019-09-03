"use strict"

// write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')

let number = 0

function change(number){
    textResult.textContent=number
}

plusButton.addEventListener('click',()=>change(number++))
minusButton.addEventListener('click',()=>change(number--))
resetButton.addEventListener('click',()=>change(number=0))