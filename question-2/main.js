"use strict"

//write code in here

const plusButton=document.getElementById("plus")
const minusButton=document.getElementById("minus")
const text=document.getElementById("number")
const resetButton=document.getElementById("reset")
let number=0
function change(todo){
    if(todo=="add"){number++}
    if(todo=="sub"){number--}
    if(todo=="reset"){number=0}
    text.textContent=number
}
plusButton.addEventListener("click", ()=>    change("add"))
minusButton.addEventListener("click", ()=>   change("sub"))
resetButton.addEventListener("click", ()=>   change("reset"))
