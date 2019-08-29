// write code in here

let output = 0

const numberElement = document.getElementById('number')
const numberInput = document.getElementById('numberInput')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

const calculate = operation => () => {
  operation == '+'
    ? (output += parseInt(numberInput.value))
    : operation == '-'
    ? (output -= parseInt(numberInput.value))
    : (output = 0)
  numberElement.textContent = output;
  numberInput.value = ''
}

plusButton.addEventListener('click', calculate('+'))
minusButton.addEventListener('click', calculate('-'))
resetButton.addEventListener('click', calculate(false))
