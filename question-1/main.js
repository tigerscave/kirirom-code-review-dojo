'use strict';
const appleButton = document.getElementById('apple');
const bananaButton = document.getElementById('banana');
const orangeButton = document.getElementById('orange');
const resetButton = document.getElementById('reset');
const textView = document.getElementById('text');
appleButton.addEventListener('click', () => changeText('Apple'));
bananaButton.addEventListener('click', () => changeText('Banana'));
orangeButton.addEventListener('click', () => changeText('Orange'));
resetButton.addEventListener('click', () => changeText(''));
function changeText (text) {
  textView.textContent = text;
}
// write conde in here
