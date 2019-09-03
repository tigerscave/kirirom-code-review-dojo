"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberLabel = document.getElementById('number')

function plus(){
  let number = parseInt(numberLabel.textContent)
  numberLabel.textContent = number+1
}

function minus(){
  let number = parseInt(numberLabel.textContent)
  numberLabel.textContent = number-1
}

function reset(){
  numberLabel.textContent = 0
}

plusButton.addEventListener('click', plus)

minusButton.addEventListener('click', minus)

resetButton.addEventListener('click', reset)
