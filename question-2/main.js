"use strict"

//write code in here
const plusButton = document.getElementById("plus")
const minusElement = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")
var number = 0

function changeNumber(text){
    if(text==="+")
    {
        numberElement.textContent=++number
    }
    else if(text==="-")
    {
        numberElement.textContent=--number
    }
    else
    {
        numberElement.textContent=0
    }
}

plusButton.addEventListener("click",() => changeNumber("+"))
minusElement.addEventListener("click",() => changeNumber("-"))
resetButton.addEventListener("click",() => changeNumber("reset"))

