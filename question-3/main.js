'use strict';

// write code in here
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');
const editText = document.getElementById('numberInput');

plusBtn.addEventListener('click', plusNum);
minusBtn.addEventListener('click', minusNum);
resetBtn.addEventListener('click', reset);

function reset () {
  textView.textContent = 0;
  editText.value = '';
}
function plusNum () {
  if (editText.value) {
    textView.textContent = parseInt(textView.textContent) + parseInt(editText.value);
    editText.value = '';
  }
}
function minusNum () {
  if (editText.value) {
    textView.textContent = parseInt(textView.textContent) - parseInt(editText.value);
    editText.value = '';
  }
}
// write code in here
