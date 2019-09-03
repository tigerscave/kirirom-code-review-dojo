const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const addTwoButton = document.getElementById('two')
const addThreeButton = document.getElementById('three')
const addFourButton = document.getElementById('four')
const addFiveButton = document.getElementById('five')
const addSixButton = document.getElementById('six')
const addSevenButton = document.getElementById('seven')
const addEightButton = document.getElementById('eight')
const addNineButton = document.getElementById('nine')
const addTenButton = document.getElementById('ten')
const numberElement = document.getElementById('number')

function plus(){
	numberElement.textContent = parseInt(number.textContent) + 1
}

function minus(){
	numberElement.textContent = parseInt(number.textContent) - 1
}

function reset(){
	numberElement.textContent = 0
}

function add(number)
{
	numberElement.textContent = parseInt(numberElement.textContent) + number
}

plusButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)
addTwoButton.addEventListener('click', () => add(2))
addThreeButton.addEventListener('click', () => add(3))
addFourButton.addEventListener('click', () => add(4))
addFiveButton.addEventListener('click', () => add(5))
addSixButton.addEventListener('click', () => add(6))
addSevenButton.addEventListener('click', () => add(7))
addEightButton.addEventListener('click', () => add(8))
addNineButton.addEventListener('click', () => add(9))
addTenButton.addEventListener('click', () => add(10))