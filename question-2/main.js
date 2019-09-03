"use strict"

//write code in here

const minusButton = document.getElementById("minus")
const addButton = document.getElementById("plus")
const resetButton = document.getElementById("reset")
const numberText = document.getElementById("number")

var n = 0

function ChangeVaule(operationButton){
    switch(operationButton)
    {
        case minusButton:
            n--
            break
        case addButton:
            n++
            break
        case resetButton:
            n = 0
            break
    }
    numberText.innerHTML = n
}

addButton.addEventListener("click", () => ChangeVaule(addButton))
minusButton.addEventListener("click", () => ChangeVaule(minusButton))
resetButton.addEventListener("click", () => ChangeVaule(resetButton))