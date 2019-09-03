"use strict"

//write code in here

const minusButton = document.getElementById("minus")
const addButton = document.getElementById("plus")
const resetButton = document.getElementById("reset")
const numberText = document.getElementById("number")

let n = 0

function changeValue(e){
    
    switch(e.target)
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
    numberText.textContent = n
}


addButton.addEventListener("click", changeValue)
minusButton.addEventListener("click", changeValue)
resetButton.addEventListener("click", changeValue)