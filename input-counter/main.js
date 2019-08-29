// write code in here

let output = 0

const numberElement = document.getElementById('number')
const numberInput = document.getElementById('numberInput')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

function calculate(operation) {
  if (operation == '+') {
    output += parseInt(numberInput.value)
    numberElement.textContent = output
  } else if (operation == '-') {
    output -= parseInt(numberInput.value)
    numberElement.textContent = output
  } else {
    output = 0
    numberElement.textContent = output
  }
  numberInput.value = ''
}

plusButton.addEventListener('click', () => calculate('+'))
minusButton.addEventListener('click', () => calculate('-'))
resetButton.addEventListener('click', () => calculate(false))
