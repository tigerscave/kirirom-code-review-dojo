"use strict"

// write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')

var number = 0

function change(number){
    textElement.textContent=number
}

plusButton.addEventListener('click',()=>change(number++))
minusButton.addEventListener('click',()=>change(number--))
resetButton.addEventListener('click',()=>change(number=0))