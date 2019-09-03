"use strict"

//write code in here

const minusButton = document.getElementById("minus")
const addButton = document.getElementById("plus")
const resetButton = document.getElementById("reset")
const numberText = document.getElementById("number")
var n = 0

function clicked(id){
    switch(id)
    {
        case "minus":
            n--
            break
        case "add":
            n++
            break
        case "reset":
            n = 0
            break
    }
    numberText.innerHTML = n
}

addButton.addEventListener("click", () => clicked("add"))
minusButton.addEventListener("click", () => clicked("minus"))
resetButton.addEventListener("click", () => clicked("reset"))