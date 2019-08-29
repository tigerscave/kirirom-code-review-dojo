const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberElement = document.getElementById('number')
const getInput = document.getElementById('numberInput')

var sum = 0

function add(){
    sum += parseInt(getInput.value)
    numberElement.textContent = sum
    document.getElementById('numberInput').value = ""
}
function subtract(){
    sum -= parseInt(getInput.value)
    numberElement.textContent = sum
    document.getElementById('numberInput').value = ""
}
function reset(){
    numberElement.textContent = 0
    document.getElementById('numberInput').value = ""
}

plusButton.addEventListener('click', () => add())
minusButton.addEventListener('click', () => subtract())
resetButton.addEventListener('click', () => reset())
