"use strict"

//write code in here
const numberElement = document.getElementById('number');
const addBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
let number = 0;

addBtn.addEventListener('click',()=>{
    number += 1;
    numberElement.textContent = number;
});


minusBtn.addEventListener('click',()=>{ 
    number -= 1;
    numberElement.textContent = number;
});

resetBtn.addEventListener('click',()=>{ 
    numberElement = 0;
    displayNumber.textContent = number;
});
