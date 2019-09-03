"use strict"

const body = document.getElementsByTagName("body")[0];
const numberElement = document.getElementById('number');

var i;
for (i = 2; i <= 10; i++){
    let button = document.createElement("button");
    button.innerHTML = i;
    button.id = i;
    button.style = "width: 50px; margin: 5px;";
    body.appendChild(button);        
}

document.getElementById('plus').addEventListener('click', () => buttonClicked('plus'));
document.getElementById('minus').addEventListener('click', () => buttonClicked('minus'));
document.getElementById('reset').addEventListener('click', () => buttonClicked('reset'));
document.getElementById('2').addEventListener('click', () => buttonClicked('2'));
document.getElementById('3').addEventListener('click', () => buttonClicked('3'));
document.getElementById('4').addEventListener('click', () => buttonClicked('4'));
document.getElementById('5').addEventListener('click', () => buttonClicked('5'));
document.getElementById('6').addEventListener('click', () => buttonClicked('6'));
document.getElementById('7').addEventListener('click', () => buttonClicked('7'));
document.getElementById('8').addEventListener('click', () => buttonClicked('8'));
document.getElementById('9').addEventListener('click', () => buttonClicked('9'));
document.getElementById('10').addEventListener('click', () => buttonClicked('10'));


function buttonClicked(buttonId){
    if (buttonId == 'plus'){
        numberElement.textContent = parseInt(numberElement.innerHTML) + 1;
    }
    else if (buttonId == 'minus'){
        numberElement.textContent = parseInt(numberElement.innerHTML) - 1;        
    }
    else if (buttonId == 'reset'){
        numberElement.textContent = 0;    
    }
    else if (buttonId.match(/^-?[0-9]+$/)){
        numberElement.textContent = parseInt(numberElement.innerHTML) + parseInt(buttonId);
    }   
}
