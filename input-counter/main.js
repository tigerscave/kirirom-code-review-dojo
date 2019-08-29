// write conde in here
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const input = document.getElementById('numberInput')
const numberElement = document.getElementById('number')


function changeValue(text){
	if (text == 'plus')
	{
		numberElement.textContent = parseInt(numberElement.textContent) + parseInt(input.value)	
		input.value = ""
	}
	else if (text == 'minus')
	{
		numberElement.textContent = parseInt(numberElement.textContent) - parseInt(input.value)
		input.value = ""
	}
	else 
	{
		numberElement.textContent = "0"
	}

}

plusButton.addEventListener('click', () => changeValue('plus'))
minusButton.addEventListener('click', () => changeValue('minus'))
resetButton.addEventListener('click', () => changeValue('reset'))