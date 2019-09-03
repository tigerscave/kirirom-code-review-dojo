"use strict"

// write conde in here

let getElement = id => document.getElementById(id)

const inputBox = getElement("numberInput")
const numberText = getElement("number")

const plusBtn = getElement("plus")
const minusBtn = getElement("minus")
const resetBtn = getElement("reset")

function changeNumber(step){
    //Set up varibles
    if (isNaN(step) || step === ""){
        return alert("Invalid Input!")
    }

    let currentNum = parseInt(numberText.innerHTML)
    numberText.innerHTML = currentNum + step
    inputBox.value = ""

}

plusBtn.addEventListener("click", ()=>changeNumber(parseInt(inputBox.value)))
minusBtn.addEventListener("click", ()=>changeNumber(parseInt(inputBox.value) * -1))
resetBtn.addEventListener("click", ()=>numberText.innerHTML = 0)