const increaseButton = document.getElementById('plus');
const decreaseButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const text = document.getElementById('number');

var number = parseInt(document.getElementById('number').innerText);

function calculate(number){
	text.textContent = number;

}
increaseButton.addEventListener('click',()=>calculate(number+=1));
decreaseButton.addEventListener('click',()=>calculate(number-=1));
resetButton.addEventListener('click',()=>calculate(0))