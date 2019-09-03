const addButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const displayedNumber = document.getElementById('number');
const getNumber = document.getElementById('numberInput');

let number = 0;
let inputNumber = 0;

function calculateAndDisplay(sign){
	number = parseInt(displayedNumber.innerText);
	inputNumber = parseInt(getNumber.value);

	if(isNaN(inputNumber) || Number.isInteger(inputNumber)==false){
		alert("Invalid error");
	}
	else{
		if(sign=="+"){
			number+=inputNumber;
		}
		else if(sign=="-"){
			number-=inputNumber;
		}
		else{
			number=0;
		}
	}

	
	getNumber.value="";
	displayedNumber.textContent = number;
}

addButton.addEventListener('click',()=>calculateAndDisplay("+"));
minusButton.addEventListener('click',()=>calculateAndDisplay("-"));
resetButton.addEventListener('click',()=>calculateAndDisplay(0));