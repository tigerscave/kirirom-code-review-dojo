"use strict";

// write code in here
{
  const header = document.getElementById('text');

  const FruitsName = (name) => {
    header.textContent = name
  }

  const appleButton = document.getElementById('apple')
  appleButton.addEventListener('click', () => FruitsName('APPLE'))

  const bananaButton = document.getElementById('banana')
  bananaButton.addEventListener('click', () => FruitsName('BANANA'))

  const orangeButton = document.getElementById('orange')
  orangeButton.addEventListener('click', () => FruitsName('ORANGE'))

  const resetButton = document.getElementById('reset')
  resetButton.addEventListener('click', () => FruitsName('-'))

}