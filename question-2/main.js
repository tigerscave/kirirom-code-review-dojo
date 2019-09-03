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
    else{
        i = 0
        for(i=2; i<=10; i++)
        {
            if(operation==''+i+'')
            {
                numberbutton.textContent = parseInt(numberbutton.innerHTML) + i
            }
        }
    }
}
plusbutton.addEventListener('click', ()=> buttonClick('plus'))
minusbutton.addEventListener('click', ()=> buttonClick('minus'))
resetbutton.addEventListener('click', ()=> buttonClick('reset'))


var i = 0
for(i=2; i<=10 ;i++){
    var button = document.createElement("button")
    button.innerHTML = i
    button.id = i
    button.style= "width: 50px; margin: 5px;";
    document.body.appendChild(button)
}
document.getElementById('2').addEventListener('click', ()=> buttonClick('2'))
document.getElementById('3').addEventListener('click', ()=> buttonClick('3'))
document.getElementById('4').addEventListener('click', ()=> buttonClick('4'))
document.getElementById('5').addEventListener('click', ()=> buttonClick('5'))
document.getElementById('6').addEventListener('click', ()=> buttonClick('6'))
document.getElementById('7').addEventListener('click', ()=> buttonClick('7'))
document.getElementById('8').addEventListener('click', ()=> buttonClick('8'))
document.getElementById('9').addEventListener('click', ()=> buttonClick('9'))
document.getElementById('10').addEventListener('click', ()=> buttonClick('10'))