"use strict"
// write code here 
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');
const textInput = document.getElementById('numberInput');

plusBtn.addEventListener('click', addNum);
minusBtn.addEventListener('click', subtractNum);
resetBtn.addEventListener('click', reset);

function reset() {
  textView.textContent = 0;
  textInput.value = '';
}
function addNum() {
  if (textInput.value) {
    textView.textContent = parseInt(textView.textContent) + parseInt(textInput.value);
    textInput.value = '';
  }
}
function subtractNum() {
  if (textInput.value) {
    textView.textContent = parseInt(textView.textContent) - parseInt(textInput.value);
    textInput.value = '';
  }
}
// write conde in here