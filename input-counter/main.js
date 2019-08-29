const inputText = document.getElementById('numberInput')
const textElement = document.getElementById('number')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const reset = document.getElementById('reset')

var output = 0

function plusButtonClick(number){
  output += number
  display(output)
}

function minusButtonClick(number){
  output -= number
  display(output)
}

function resetButtonClick(){
  output = 0
  display(output)
}

function display(output){
  textElement.textContent = output
  inputText.value = ''
}

minus.addEventListener('click', ()=> minusButtonClick(parseInt(inputText.value)))
plus.addEventListener('click', ()=> plusButtonClick(parseInt(inputText.value)))
reset.addEventListener('click', ()=> resetButtonClick())
