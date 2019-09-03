"use strict"

// write conde in here
const plusButton=document.getElementById("plus")
const minusButton=document.getElementById("minus")
const text=document.getElementById("number")
const resetButton=document.getElementById("reset")
// var inp=0
let number=0
// text.textContent=inp
function change(todo){
    let inp=parseInt(document.getElementById("numberInput").value)
    // console.log(typeof(inp))
    
    if(todo=="add"){
        if(isNaN(inp)){inp=0
            number+=inp
        // console.log(number)
        text.textContent=number
        }else{
        number+=inp
        // console.log(number)
        text.textContent=number}
    }
    if(todo=="sub"){
        if(isNaN(inp)){inp=0
            number-=inp
        // console.log(number)
        text.textContent=number
        }else{
        number-=inp
        // console.log(number)
        text.textContent=number
        }
    }
    if(todo=="reset"){
        number=0
        text.textContent=number
    }
    
}
plusButton.addEventListener("click", ()=>    change("add"))
minusButton.addEventListener("click", ()=>   change("sub"))
resetButton.addEventListener("click", ()=>   change("reset"))