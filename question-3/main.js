"use strict"

// write conde in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')

let number = 0 
let getNumber = 0

function changeSign(sign){
  
    getNumber=parseInt(document.getElementById('numberInput').value)
    number=parseInt(document.getElementById('number').innerText)
  
    switch(sign){
        case '+':
            number += getNumber
            break
        case '-':
            number -= getNumber
            break
        case 'reset':
            number = 0
    }
  
    document.getElementById('numberInput').value = ""
    textResult.textContent=number
}

plusButton.addEventListener('click', ()=> changeSign('+'))
minusButton.addEventListener('click', ()=> changeSign('-'))
resetButton.addEventListener('click', ()=> changeSign('reset'))
