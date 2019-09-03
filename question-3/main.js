const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')
const inputNumber = document.getElementById('numberInput').value

let number = 0 
let getNumber = 0

function changeOperator(operator){
    getNumber=parseInt(inputNumber)
    number=parseInt(textResult.innerText)
    switch(operator){
        case '+':
            number+=getNumber
            break
        case '-':
            number-=getNumber
            break
        case 'reset':
            number=0
    }
    inputNumber=""
    textResult.textContent=number
}
plusButton.addEventListener('click',()=>changeOperator('+'))
minusButton.addEventListener('click',()=>changeOperator('-'))
resetButton.addEventListener('click',()=>changeOperator('reset'))


