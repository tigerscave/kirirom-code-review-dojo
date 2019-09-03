'use strict';

// write code in here
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');
const textInput = document.getElementById('numberInput');

plusBtn.addEventListener('click', plusNum);
minusBtn.addEventListener('click', minusNum);
resetBtn.addEventListener('click', reset);

function reset () {
  textView.textContent = 0;
  textInput.value = '';
}
function plusNum () {
  if (textInput.value) {
    textView.textContent = parseInt(textView.textContent) + parseInt(textInput.value);
    textInput.value = '';
  }
}
function minusNum () {
  if (textInput.value) {
    textView.textContent = parseInt(textView.textContent) - parseInt(textInput.value);
    textInput.value = '';
  }
}
// write code in here
