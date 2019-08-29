// write conde in here
let num = 0

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const input = document.getElementById('numberInput')
const number = document.getElementById('number')

function onChange(symbol){
    let val = parseInt(input.value)
    if (symbol === '+'){
        number.textContent = (num += val).toString()
    }
    else if (symbol === '-'){
        number.textContent = (num-= val).toString()
    }
    else{
        number.textContent = '0'
        num = 0
    }
}

plusButton.addEventListener('click', () => onChange('+'))
minusButton.addEventListener('click', () => onChange('-'))
resetButton.addEventListener('click', () => onChange(''))