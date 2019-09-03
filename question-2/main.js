const plusbtn = document.getElementById("plus")
const minusbtn = document.getElementById("minus")
const resetbtn = document.getElementById("reset")
const numberbtn = document.getElementById("number")


var number = 0
plusbtn.addEventListener("click", ()=> {numberbtn.textContent=++number})
minusbtn.addEventListener("click", ()=> {numberbtn.textContent=--number})
resetbtn.addEventListener("click", ()=> {numberbtn.textContent=0})



//write code in here
