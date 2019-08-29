const numberElement = document.getElementById("number")
const inputElement = document.getElementById("numberInput")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

function plusClick(){
  numberElement.textContent = parseInt(numberElement.textContent) + parseInt(inputElement.value)
  inputElement.value = null
}
function minusClick(){
  numberElement.textContent = parseInt(numberElement.textContent) - parseInt(inputElement.value)
  inputElement.value = null
}
function resetClick(){
  numberElement.textContent = 0 
  inputElement.value = null
}

plusButton.addEventListener ('click', plusClick)
minusButton.addEventListener ('click', minusClick)
resetButton.addEventListener ('click', resetClick)

