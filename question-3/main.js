"use strict"

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')
var getInput = 0;
var result = 0;

function plusButtonClick(){
	getInput = parseFloat(document.getElementById('numberInput').value);
	result = getInput+result;
	textElement.textContent = result;
}

function minusButtonClick(){
	getInput = parseFloat(document.getElementById('numberInput').value);
	result = result-getInput;
	textElement.textContent = result;
}

function resetButtonClick(){
	result = 0;
	textElement.textContent = result;
}

plusButton.addEventListener('click', plusButtonClick)
minusButton.addEventListener('click', minusButtonClick)
resetButton.addEventListener('click', resetButtonClick)