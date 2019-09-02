"use strict"

//write code in here
const show = document.getElementById('number')
const Add = document.getElementById('plus')
const Minus = document.getElementById('minus')
const Res = document.getElementById('reset')
let number =0
Add.addEventListener('click',()=>{
     number +=1
    show.textContent = number;}
)


Minus.addEventListener('click',()=>{ 
    number -=1
    show.textContent = number;}
)

Res.addEventListener('click',()=>{ 
    number =0
    show.textContent = number;}
)
