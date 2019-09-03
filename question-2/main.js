const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const number = document.getElementById("number")

function plus() {
	number.textContent = parseInt(number.textContent) + 1
}
function minus() {
	number.textContent = parseInt(number.textContent) - 1
}
function reset() {
	number.textContent = 0
}

plusButton.addEventListener('click',plus)
minusButton.addEventListener('click',minus)
resetButton.addEventListener('click',reset)