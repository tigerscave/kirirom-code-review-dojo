"use strict"

// write conde in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberLabel = document.getElementById('number')
const inputElement = document.getElementById('numberInput')

function plus(){
  numberLabel.textContent = parseInt(numberLabel.textContent) + parseInt(inputElement.value)
  inputElement.value = ''
}

function minus(){
  numberLabel.textContent = parseInt(numberLabel.textContent) - parseInt(inputElement.value)
  inputElement.value = ''
}

function reset(){
  numberLabel.textContent = 0
}

plusButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)
