"use strict"

//write code in here

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const textElement = document.getElementById('number')

function buttonClicked(res){
    if (res == 'plus') textElement.textContent = parseInt(textElement.innerHTML) + 1;
    else if (res == 'minus') textElement.textContent = parseInt(textElement.innerHTML) - 1;
    else if (res == 'reset') textElement.textContent = 0;
}

plusButton.addEventListener('click', () => buttonClicked("plus"));
minusButton.addEventListener('click', () => buttonClicked("minus"));
resetButton.addEventListener('click', () => buttonClicked("reset"));
