const increaseButton = document.getElementById('plus');
const decreaseButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const text = document.getElementById('number');

var number = parseInt(document.getElementById('number').innerText);

function displayResult(number){
	text.textContent = number;

}
increaseButton.addEventListener('click',()=>displayResult(number+=1));
decreaseButton.addEventListener('click',()=>displayResult(number-=1));
resetButton.addEventListener('click',()=>displayResult(0));