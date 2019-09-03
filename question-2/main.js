"use strict"

//write code in here

let number = 0
document.getElementById('plus').addEventListener('click',function()
{
    number++;
    document.getElementById('number').innerHTML = number
})
document.getElementById('minus').addEventListener('click',function()
{
    number--;
    document.getElementById('number').innerHTML = number
})
document.getElementById('reset').addEventListener('click',function()
{
    number = 0
    document.getElementById('number').innerHTML = number
})
