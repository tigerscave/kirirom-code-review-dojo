"use strict"

//write code in here
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

const numberText = document.getElementById("number")

function changeNumber(opr) {
    let currentNum = parseInt(numberText.innerHTML)
    switch(opr){
        case "+":
            numberText.innerHTML = currentNum + 1
            break;
    
        case "-":
            numberText.innerHTML = currentNum - 1
            break;

        case "reset" :
            numberText.innerHTML = 0
            break;
    }
}

plusBtn.addEventListener("click",() => changeNumber("+"))
minusBtn.addEventListener("click",() => changeNumber("-"))
resetBtn.addEventListener("click" ,() => changeNumber("reset"))
