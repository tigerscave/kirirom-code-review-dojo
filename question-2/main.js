"use strict"

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textElement = document.getElementById('number')
var number = 0;
function plusButtonClick(){
	number++;
	textElement.textContent = number;
}

function minusButtonClick(){
	number--;
	textElement.textContent = number;
}

function resetButtonClick(){
	number = 0;
	textElement.textContent = number;
}

plusButton.addEventListener('click', plusButtonClick)
minusButton.addEventListener('click', minusButtonClick)
resetButton.addEventListener('click', resetButtonClick)