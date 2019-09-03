const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const numberElement = document.getElementById('number')
let number = 0;
plusButton.addEventListener("click", function(){
  number++;
  numberElement.innerHTML = number;
})
minusButton.addEventListener("click", function(){
  number--;
  numberElement.innerHTML = number;
})
resetButton.addEventListener("click", function(){
  number = 0;
  numberElement.innerHTML = number;
})
