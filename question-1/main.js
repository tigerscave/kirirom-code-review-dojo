"use strict"
// document.getElementById("apple").addEventListener("click", () => {
//     document.getElementById("text").innerHTML = document.getElementById("apple").innerHTML
// })
// document.getElementById("orange").addEventListener("click", () => {
//     document.getElementById("text").innerHTML = document.getElementById("orange").innerHTML
// })
// document.getElementById("banana").addEventListener("click", () => {
//     document.getElementById("text").innerHTML = document.getElementById("banana").innerHTML
// })
// document.getElementById("reset").addEventListener("click", () => {
//     document.getElementById("text").innerHTML = "-"
// })

const appleButton = document.getElementById("apple")
const orangeButton = document.getElementById("orange")
const bananaButton = document.getElementById("banana")
const resetButton = document.getElementById("reset")

const textElement = document.getElementById("text")

function changetext(text){
    textElement.innerHTML = text
}
appleButton.addEventListener('click', () => changetext('APPLE'))
orangeButton.addEventListener('click', () => changetext('BANANA'))
bananaButton.addEventListener('click', () => changetext('ORANGE'))
resetButton.addEventListener('click', () => changetext('-'))
// write conde in here