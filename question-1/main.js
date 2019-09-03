"use strict"



// write conde in here
const appleButton=document.getElementById("apple")
const bananaButton=document.getElementById("banana")
const orangeButton=document.getElementById("orange")
const textElement=document.getElementById("text")
const resetButton=document.getElementById("reset")
function ButtonClick(text){
    textElement.textContent=text
}

appleButton.addEventListener("click",()=>  ButtonClick("APPLE"))
bananaButton.addEventListener("click",()=>   ButtonClick("BANANA"))
orangeButton.addEventListener("click",()=>   ButtonClick("ORANGE"))
resetButton.addEventListener("click",()=>  ButtonClick("-"))

