"use strict"

// write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')
const twoButton = document.getElementById('plustwo')
const threeButton = document.getElementById('plusthree')
const fourButton = document.getElementById('plusfour')
const fiveButton = document.getElementById('plusfive')
const sixButton = document.getElementById('plussix')
const sevenButton = document.getElementById('plusseven')
const eightButton = document.getElementById('pluseight')
const nineButton = document.getElementById('plusnine')
const tenButton = document.getElementById('plusten')

let number = 0

function changeNumber(number){
    textResult.textContent=number
}

plusButton.addEventListener('click',()=>changeNumber(number++))
minusButton.addEventListener('click',()=>changeNumber(number--))
resetButton.addEventListener('click',()=>changeNumber(number=0))

twoButton.addEventListener('click',()=>changeNumber(number += 2))
threeButton.addEventListener('click',()=>changeNumber(number += 3))
fourButton.addEventListener('click',()=>changeNumber(number += 4))
fiveButton.addEventListener('click',()=>changeNumber(number += 5))
sixButton.addEventListener('click',()=>changeNumber(number += 6))
sevenButton.addEventListener('click',()=>changeNumber(number += 7))
eightButton.addEventListener('click',()=>changeNumber(number += 8))
nineButton.addEventListener('click',()=>changeNumber(number += 9))
tenButton.addEventListener('click',()=>changeNumber(number += 10))
