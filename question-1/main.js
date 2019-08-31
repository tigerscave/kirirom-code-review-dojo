"use strict"

const appleButton = document.getElementById('apple')
const textElement = document.getElementById('text')
const orangeButton = document.getElementById('orange')
const bananaButton = document.getElementById('banana')
const resetButton = document.getElementById('reset')

function appleButtonClick(){
	textElement.textContent = 'APPLE'
}
function bananaButtonClick(){
	textElement.textContent = 'BANANA'
}
function orangeButtonClick(){
	textElement.textContent = 'ORANGE'
}
function resetButtonClick(){
	textElement.textContent = '-'
}


appleButton.addEventListener('click', appleButtonClick)
bananaButton.addEventListener('click', bananaButtonClick)
orangeButton.addEventListener('click', orangeButtonClick)
resetButton.addEventListener('click', resetButtonClick)
