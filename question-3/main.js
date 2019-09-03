"use strict"

// write conde in here

let getElement = id => document.getElementById(id)

const inputBox = getElement("numberInput")
const numberText = getElement("number")

const plusBtn = getElement("plus")
const minusBtn = getElement("minus")
const resetBtn = getElement("reset")

function changeNumber(operator,step){
    //Set up varibles
    if (step == "") {
        step = 0
    } else {
        step = parseInt(step)
    }

    let currentNum = parseInt(numberText.innerHTML)

    switch(operator){
        case "+" :
            numberText.innerHTML = currentNum + step
            break;

        case "-" :
            numberText.innerHTML = currentNum - step
            break;
        case "reset" :
            numberText.innerHTML = step
            break;
    }
    inputBox.value = ""
}

plusBtn.addEventListener("click", ()=>changeNumber("+",inputBox.value))
minusBtn.addEventListener("click", ()=>changeNumber("-",inputBox.value))
resetBtn.addEventListener("click", ()=>changeNumber("reset",0))