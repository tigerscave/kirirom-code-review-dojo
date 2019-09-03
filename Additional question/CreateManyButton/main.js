'use strict';

// write code in here
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const textView = document.getElementById('number');

plusBtn.addEventListener('click', () => plusNum(1));
minusBtn.addEventListener('click', () => minusNum(1));
resetBtn.addEventListener('click', reset);

let currNum = 0;

function reset () {
  textView.textContent = 0;
}
function plusNum (num) {
  currNum = parseInt(textView.textContent);
  textView.textContent = currNum + num;
}
function minusNum (num) {
  currNum = parseInt(textView.textContent);
  textView.textContent = currNum - num;
}

for (let i = 2; i < 10; i++) {
  const button = document.createElement('button');
  const node = document.createTextNode(i);
  button.appendChild(node);
  button.addEventListener('click', () => plusNum(i));
  document.getElementById('buttonGroup').insertBefore(button, plusBtn);
}
// write code in here
