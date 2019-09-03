"use strict"

// write conde in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberLabel = document.getElementById('number')
const inputElement = document.getElementById('numberInput')
let number = 0

function plus(){
  number = parseInt(numberLabel.textContent)
  numberLabel.textContent = number + parseInt(inputElement.value)
  inputElement.value = ''
}

function minus(){
  number = parseInt(numberLabel.textContent)
  numberLabel.textContent = number - parseInt(inputElement.value)
  inputElement.value = ''
}

function reset(){
  numberLabel.textContent = 0
}

plusButton.addEventListener('click', plus)

minusButton.addEventListener('click', minus)

resetButton.addEventListener('click', reset)
