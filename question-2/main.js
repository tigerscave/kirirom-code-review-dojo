"use strict"
const plusbutton = document.getElementById("plus")
const minusbutton = document.getElementById("minus")
const resetbutton = document.getElementById("reset")
const numberbutton = document.getElementById("number")

function buttonClick(operation)
{
    if(operation=='plus'){
        numberbutton.textContent = parseInt(numberbutton.innerHTML)+1
    }
    else if (operation == 'minus'){
        numberbutton.textContent = parseInt(numberbutton.innerHTML)-1
    }
    else if (operation == 'reset'){
        numberbutton.textContent = 0

    }
}
plusbutton.addEventListener('click', ()=> buttonClick('plus'))
minusbutton.addEventListener('click', ()=> buttonClick('minus'))
resetbutton.addEventListener('click', ()=> buttonClick('reset'))
