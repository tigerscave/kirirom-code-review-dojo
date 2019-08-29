// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

const numberElement = document.getElementById('number')

let number = parseInt(numberElement.textContent)

plusButton.addEventListener('click', () => {
    var numInput = document.getElementById('numberInput').value
    number = number + parseInt(numInput)
    numberElement.textContent = number
    document.getElementById('number').numberInput
    numberInput.value = ''
})

minusButton.addEventListener('click', () => {
    var numInput = document.getElementById('numberInput').value
    number = number - parseInt(numInput)
    numberElement.textContent = number
    document.getElementById('number').numberInput
    numberInput.value = ''
})

resetButton.addEventListener('click', () => {
    var numInput = document.getElementById('numberInput').value
    number = 0
    numberElement.textContent = number
    document.getElementById('number').numberInput
    numberInput.value = ''
})

