"use strict"

//write code in here

var i = 0
document.getElementById('plus').addEventListener('click',function()
{
    i++;
    document.getElementById('number').innerHTML = i
})
document.getElementById('minus').addEventListener('click',function()
{
    i--;
    document.getElementById('number').innerHTML = i
})
document.getElementById('reset').addEventListener('click',function()
{
    i = 0;
    document.getElementById('number').innerHTML =  i
})
