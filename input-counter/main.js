const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberElement = document.getElementById('number')
const getInput = document.getElementById('numberInput')

var output = 0

function add(){
    output += parseInt(getInput.value)
    numberElement.textContent = output
    document.getElementById('numberInput').value = ""
}
function subtract(){
    output -= parseInt(getInput.value)
    numberElement.textContent = output
    document.getElementById('numberInput').value = ""
}
function reset(){
    output = 0
    numberElement.textContent = output
    document.getElementById('numberInput').value = ""
}

plusButton.addEventListener('click', add)
minusButton.addEventListener('click', subtract)
resetButton.addEventListener('click', reset)
