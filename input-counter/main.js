var numberElement = document.getElementById("number")
var inputElement = document.getElementById("numberInput")
var inputValue = 0
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

function plusClick(number){
  numberElement.textContent = parseInt(numberElement.textContent) + parseInt(number)
  inputElement.value = null
}
function minusClick(number){
  numberElement.textContent = parseInt(numberElement.textContent) - parseInt(number)
  inputElement.value = null
}
function resetClick(){
  numberElement.textContent = 0 
  inputValue = null
}

plusButton.addEventListener ('click', () => plusClick(inputValue = inputElement.value))
minusButton.addEventListener ('click', () => minusClick(inputValue = inputElement.value))
resetButton.addEventListener ('click', resetClick)

