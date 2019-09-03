"use strict"

const numberValue = document.getElementById('number');
const inputField = document.getElementById('numberInput');

document.getElementById('plus').addEventListener('click', () => buttonClicked('plus'));
document.getElementById('minus').addEventListener('click', () => buttonClicked('minus'));
document.getElementById('reset').addEventListener('click', () => buttonClicked('reset'));

function buttonClicked(operate){
    var input = inputField.value;
    var number = numberValue.textContent;
    if (operate == 'plus') numberValue.textContent = parseInt(number) + parseInt(input);
    else if (operate == 'minus') numberValue.textContent = parseInt(number) - parseInt(input);
    else if (operate == 'reset') numberValue.textContent = 0;
}
