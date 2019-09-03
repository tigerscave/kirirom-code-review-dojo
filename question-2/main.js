'use strict';
// write code in here
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');

plusBtn.addEventListener('click', plusNum);
minusBtn.addEventListener('click', minusNum);
resetBtn.addEventListener('click', reset);

let num = 0 

function reset() {
  textView.textContent = 0;
}
function plusNum() {
  num = parseInt(textView.textContent);
  textView.textContent = num + 1;
}
function minusNum() {
  num = parseInt(textView.textContent);
  textView.textContent = num - 1;
