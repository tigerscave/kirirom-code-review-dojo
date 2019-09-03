"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberLabel = document.getElementById('number')
let number = 0

function plus(){
  number = parseInt(numberLabel.textContent)
  numberLabel.textContent = number+1
}

function minus(){
  number = parseInt(numberLabel.textContent)
  numberLabel.textContent = number-1
}

function reset(){
  numberLabel.textContent = 0
}

plusButton.addEventListener('click', plus)

minusButton.addEventListener('click', minus)

resetButton.addEventListener('click', reset)
