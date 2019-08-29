// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const emptyInput = document.getElementById('numberInput')

function plusButtonClick()
{
    var number = document.getElementById('number')
    var numberInput = Number(document.getElementById('numberInput').value)
    num = Number(number.textContent)
    num = num + numberInput
    number.textContent = num
    // emptyInput.value = ''
    clearInput()
}

function minusButtonClick()
{
    var number = document.getElementById('number')
    var numberInput = Number(document.getElementById('numberInput').value)
    num = Number(number.textContent)
    num = num - numberInput
    number.textContent = num
    // emptyInput.value = ''
    clearInput()
}

function resetButtonClick()
{
    var number = document.getElementById('number')
    // var numberInput = document.getElementById('numberInput')
    number.textContent = 0
    // numberInput.value=''
    clearInput()
}

function clearInput()
{
    emptyInput.value = ''
}
plusButton.addEventListener('click', plusButtonClick)
minusButton.addEventListener('click', minusButtonClick)
resetButton.addEventListener('click', resetButtonClick)
