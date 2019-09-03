"use strict"

//write code in here

const minus = document.getElementById("minus")
const add = document.getElementById("plus")
const reset = document.getElementById("reset")
const number = document.getElementById("number")
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
    number.innerHTML = n
}

add.addEventListener("click", () => clicked("add"))
minus.addEventListener("click", () => clicked("minus"))
reset.addEventListener("click", () => clicked("reset"))