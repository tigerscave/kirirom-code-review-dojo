const inputText = document.getElementById('numberInput')
const textElement = document.getElementById('number')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const reset = document.getElementById('reset')

var sum = 0

function plusButtonClick(number){
  sum += number
  displaySum(sum)
}

function minusButtonClick(number){
  sum -= number
  displaySum(sum)
}

function resetButtonClick(){
  sum = 0
  displaySum(sum)
}

function displaySum(sum){
  textElement.textContent = sum
  inputText.value = ''
}

minus.addEventListener('click', ()=> minusButtonClick(parseInt(inputText.value)))
plus.addEventListener('click', ()=> plusButtonClick(parseInt(inputText.value)))
reset.addEventListener('click', ()=> resetButtonClick())
