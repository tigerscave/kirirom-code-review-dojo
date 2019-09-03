"use strict"
// write code here 
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');
const editTextValue = document.getElementById('numberInput');

plusBtn.addEventListener('click', () => plusNum());
minusBtn.addEventListener('click', () => minusNum());
resetBtn.addEventListener('click', reset);

function reset() {
  textView.textContent = 0;
  editTextValue.value = '';
}
function plusNum() {
  if (editTextValue.value) {
    const currNum = parseInt(textView.textContent);
    textView.textContent = currNum + parseInt(editTextValue.value);
    editTextValue.value = '';
  }
}
function minusNum() {
  if (editTextValue.value) {
    const currNum = parseInt(textView.textContent);
    textView.textContent = currNum - parseInt(editTextValue.value);
    editTextValue.value = '';
  }
}
// write conde in here