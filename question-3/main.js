"use strict"

// write conde in here

const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")

let numbers = 0

function calculate(string){
    let numberInputElement = document.getElementById("numberInput").value
    if (string == "+"){
        numbers = numbers + Number(numberInputElement)
        numberElement.textContent = numbers
    }
    else{   
        numbers = numbers - Number(numberInputElement)
        numberElement.textContent = numbers
    }
}
function reset(){
    numbers = 0
    numberElement.textContent = numbers
    
}

plusButton.addEventListener("click",() => calculate("+"))
minusButton.addEventListener("click",() => calculate("-"))
resetButton.addEventListener("click",() => reset())