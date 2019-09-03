"use strict"

//write code in here

const minusButton = document.getElementById("minus")
const addButton = document.getElementById("plus")
const resetButton = document.getElementById("reset")
const numberText = document.getElementById("number")

let n = 0

function changeVaule(operationButton){
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

addButton.addEventListener("click", () => changeVaule(addButton))
minusButton.addEventListener("click", () => changeVaule(minusButton))
resetButton.addEventListener("click", () => changeVaule(resetButton))