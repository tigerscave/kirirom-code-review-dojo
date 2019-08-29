// write conde in here
const outText = document.getElementById('number')
const inputText = document.getElementById('numberInput')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
let num = 0

function plusNum() {
    if(inputText.value != "") {
        num = num + parseInt(inputText.value)
    }
    outText.textContent = num
    inputText.focus()
}

function minusNum() {
    if(inputText.value != "") {
        num = num - parseInt(inputText.value)
    }
    outText.textContent = num
    inputText.focus()
}

function reset() {
    inputText.value = ""
    num = 0
    outText.textContent = num
    inputText.focus()
}


resetButton.addEventListener('click', reset)
plusButton.addEventListener('click', plusNum)
minusButton.addEventListener('click', minusNum)

