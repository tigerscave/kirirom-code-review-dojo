"use strict"

//write code in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
let number = 0
plusButton.addEventListener('click',function()
{
    number++;
    document.getElementById('number').innerHTML = number
})
minusButton.addEventListener('click',function()
{
    number--;
    document.getElementById('number').innerHTML = number
})
resetButton.addEventListener('click',function()
{
    number = 0
    document.getElementById('number').innerHTML = number
})
