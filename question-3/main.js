"use strict"

// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const inputedNumber = document.getElementById('numberInput')
const numberElement = document.getElementById('number')
let firstValue = 0
let secondValue = 0
let result = 0
let direction = 0
plusButton.addEventListener('click',function()
{ 
    if(direction == 0)
    {
        firstValue = parseInt(inputedNumber.value)
        numberElement.innerHTML = firstValue
        inputedNumber.value = " ";
        direction++;
    }
    else
    {
        secondValue = parseInt(inputedNumber.value)
        firstValue = firstValue + secondValue
        numberElement.innerHTML = firstValue
        secondValue = 0
        inputedNumber.value = " ";
    }   
})
minusButton.addEventListener('click',function()
{
    if(direction == 0)
    {
        firstValue = parseInt(inputedNumber.value)
        numberElement.innerHTML = firstValue
        inputedNumber.value = " ";
        direction++;
    }
    else
    {
        secondValue = parseInt(inputedNumber.value)
        firstValue = firstValue - secondValue
        numberElement.innerHTML = firstValue
        secondValue = 0
        inputedNumber.value = " ";
    } 
})
resetButton.addEventListener('click',function()
{
    firstValue = 0
    secondValue = 0
    direction = 0
    result = 0
    numberElement.innerHTML = 0
})