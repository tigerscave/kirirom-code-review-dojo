'use strict';

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');

plusBtn.addEventListener('click', () => plusNum());
minusBtn.addEventListener('click', () => MinusNum());
resetBtn.addEventListener('click', reset);

function reset () {
  textView.textContent = 0;
}
function plusNum () {
  let num = parseInt(textView.textContent);
  textView.textContent = num + 1;
}
function MinusNum () {
  let num = parseInt(textView.textContent);
  textView.textContent = num - 1;
}
// write code in here
