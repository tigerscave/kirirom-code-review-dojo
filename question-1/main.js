"use strict"

// write conde in here

const appleButton = document.getElementById('apple')
const bananaButton = document.getElementById('banana')
const orangeButton = document.getElementById('orange')
const resetButton = document.getElementById('reset')

const textElement = document.getElementById('text')

function bananaButtonClick() {
  textElement.textContent = "BANANA"
}
bananaButton.addEventListener('click', bananaButtonClick)

function appleButtonClick() {
  textElement.textContent = "APPLE"
}
appleButton.addEventListener('click', appleButtonClick)

function orangeButtonClick() {
  textElement.textContent = "ORANGE"
}
orangeButton.addEventListener('click', orangeButtonClick)

function resetButtonClick() {
  textElement.textContent = "  "
}
resetButton.addEventListener('click', resetButtonClick)
