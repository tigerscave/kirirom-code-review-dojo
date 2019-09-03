const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const textResult = document.getElementById('number')

let number = 0 
let getNumber = 0

function changeOperator(operator){
    getNumber=parseInt(document.getElementById('numberInput').value)
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
    document.getElementById('numberInput').value=""
    textResult.textContent=number
}
plusButton.addEventListener('click',()=>changeOperator('+'))
minusButton.addEventListener('click',()=>changeOperator('-'))
resetButton.addEventListener('click',()=>changeOperator('reset'))


