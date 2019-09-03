const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')
let number = 0
function changeNumber(number){
    textResult.textContent=number
}
plusButton.addEventListener('click',()=>changeNumber(number++))
minusButton.addEventListener('click',()=>changeNumber(number--))
resetButton.addEventListener('click',()=>changeNumber(number=0))

