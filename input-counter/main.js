// write conde in here
const numberElement = document.getElementById('number')
const numberInputValue = document.getElementById('numberInput')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

let number = 0

function calculate(operator){
    let input = parseInt(numberInputValue.value)
    if(isNaN(input)){
        input=0
    }
    if(operator == '+') {
        number = number + input;
    }
    else if(operator == '-') {
        number = number - input;
    }
    else{
        number = 0;
    }
    numberElement.textContent = number
    numberInputValue.value=''
}

plusButton.addEventListener('click', () => calculate('+'))
minusButton.addEventListener('click', () => calculate('-'))
resetButton.addEventListener('click', () => calculate('reset'))