"use strict"

// write conde in here
const appleButton = document.getElementById("apple")
const bananaButton = document.getElementById("banana")
const orangeButton = document.getElementById("orange")
const resetButton = document.getElementById("reset")

function changeText(text){
    textElement.textContent = text
}
appleButton.addEventListener('click',() =>changeText('Apple'))
bananaButton.addEventListener('click',() =>changeText('Banana'))
orangeButton.addEventListener('click',() =>changeText('Orange'))
resetButton.addEventListener('click',() =>changeText('_'))

