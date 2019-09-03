'use strict';

// write code in here
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');
const editTextValue = document.getElementById('numberInput');

plusBtn.addEventListener('click', () => plusNum());
minusBtn.addEventListener('click', () => minusNum());
resetBtn.addEventListener('click', reset);

function reset () {
  textView.textContent = 0;
  editTextValue.value = '';
}

let currNum = 0;
function plusNum () {
  currNum = parseInt(textView.textContent);
  textView.textContent = currNum + parseInt(editTextValue.value);
  editTextValue.value = '';
}
function minusNum () {
  currNum = parseInt(textView.textContent);
  textView.textContent = currNum - parseInt(editTextValue.value);
  editTextValue.value = '';
}
// write code in here
