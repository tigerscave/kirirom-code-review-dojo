"use strict"
const plusbutton = document.getElementById("plus")
const minusbutton = document.getElementById("minus")
const resetbutton = document.getElementById("reset")
const numberbutton = document.getElementById("number")

function buttonClick(res)
{
    if(res=='plus'){
        numberbutton.textContent = parseInt(numberbutton.innerHTML)+1
    }
    else if (res == 'minus'){
        numberbutton.textContent = parseInt(numberbutton.innerHTML)-1
    }
    else if (res == 'reset'){
        numberbutton.textContent = 0

    }
}
plusbutton.addEventListener('click', ()=> buttonClick('plus'))
minusbutton.addEventListener('click', ()=> buttonClick('minus'))
resetbutton.addEventListener('click', ()=> buttonClick('reset'))
