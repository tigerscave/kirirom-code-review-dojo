// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const input = document.getElementById('numberInput')
const numberElement = document.getElementById('number')

function changeNumber(text){
	if (text == 'plus') {
		numberElement.textContent = parseInt(numberElement.textContent) + parseInt(input.value)
	} else if (text == 'minus') {
		numberElement.textContent = parseInt(numberElement.textContent) - parseInt(input.value)
	} else {
		numberElement.textContent = "0"
	}
	input.value = ""
}

plusButton.addEventListener('click', () => changeNumber('plus'))
minusButton.addEventListener('click', () => changeNumber('minus'))
resetButton.addEventListener('click', () => changeNumber('reset'))