// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberInput = document.getElementById('numberInput')
const number = document.getElementById('number')

function plusButtonClick()
{
    var num = Number(number.textContent) + Number(numberInput.value)
    number.textContent = num
    clearInput()
}

function minusButtonClick()
{
    var num = Number(number.textContent) - Number(numberInput.value)
    number.textContent = num
    clearInput()
}

function resetButtonClick()
{
    number.textContent = 0
    clearInput()
}

function clearInput()
{
    numberInput.value = ''
}
plusButton.addEventListener('click', plusButtonClick)
minusButton.addEventListener('click', minusButtonClick)
resetButton.addEventListener('click', resetButtonClick)
