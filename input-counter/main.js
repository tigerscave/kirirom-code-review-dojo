// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

function plusButtonClick()
{
    var number = document.getElementById('number')
    var number_input = Number(document.getElementById('numberInput').value)
    num = Number(number.textContent)
    num = num + number_input
    number.textContent = num
    var emptyinput = document.getElementById('numberInput')
    emptyinput.value = ''
}

function minusButtonClick()
{
    var number = document.getElementById('number')
    var number_input = Number(document.getElementById('numberInput').value)
    num = Number(number.textContent)
    num = num - number_input
    number.textContent = num
    var emptyinput = document.getElementById('numberInput')
    emptyinput.value = ''
}

function resetButtonClick()
{
    var number = document.getElementById('number')
    var number_input = document.getElementById('numberInput')
    number.textContent = 0
    number_input.value=''
}

plusButton.addEventListener('click', plusButtonClick)
minusButton.addEventListener('click', minusButtonClick)
resetButton.addEventListener('click', resetButtonClick)
