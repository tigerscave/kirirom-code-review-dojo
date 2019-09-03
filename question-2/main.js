const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')

const twoButton = document.getElementById('plusTwo')
const threeButton = document.getElementById('plusThree')
const fourButton = document.getElementById('plusFour')
const fiveButton = document.getElementById('plusFive')
const sixButton = document.getElementById('plusSix')
const sevenButton = document.getElementById('plusSeven')
const eightButton = document.getElementById('plusEight')
const nineButton = document.getElementById('plusNine')
const tenButton = document.getElementById('plusTen')

const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')
let number = 0
function changeNumber(number){
    textResult.textContent=number
}
plusButton.addEventListener('click',()=>changeNumber(number++))
minusButton.addEventListener('click',()=>changeNumber(number--))

twoButton.addEventListener('click',()=>changeNumber(number += 2))
threeButton.addEventListener('click',()=>changeNumber(number += 3))
fourButton.addEventListener('click',()=>changeNumber(number += 4))
fiveButton.addEventListener('click',()=>changeNumber(number += 5))
sixButton.addEventListener('click',()=>changeNumber(number += 6))
sevenButton.addEventListener('click',()=>changeNumber(number += 7))
eightButton.addEventListener('click',()=>changeNumber(number += 8))
nineButton.addEventListener('click',()=>changeNumber(number += 9))
tenButton.addEventListener('click',()=>changeNumber(number += 10))

resetButton.addEventListener('click',()=>changeNumber(number=0))

