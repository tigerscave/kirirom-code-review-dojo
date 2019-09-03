const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")

let number = 0

plusButton.addEventListener("click",() => {numberelement.textContent = ++number})
minusButton.addEventListener("click",() => {numberelement.textContent = --number})
resetButton.addEventListener("click",() => {numberelement.textContent = 0})



//write code in here
