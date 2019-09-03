"use strict"

//write code in here
let getDom = id => document.getElementById(id)

const plusBtn = getDom("plus")
const minusBtn = getDom("minus")
const resetBtn = getDom("reset")

const numberText = getDom("number")

function changeNumber(opr,step) {
    let currentNum = parseInt(numberText.innerHTML)
    step = parseInt(step)
    switch(opr){
        case "+":
            numberText.innerHTML = currentNum + step
            break;
    
        case "-":
            numberText.innerHTML = currentNum - step
            break;

        case "reset" :
            numberText.innerHTML = step
            break;
    }
}

plusBtn.addEventListener("click",() => changeNumber("+",1))
minusBtn.addEventListener("click",() => changeNumber("-",1))
resetBtn.addEventListener("click" ,() => changeNumber("reset",0))

//Create Buttons
for (let i=2 ; i<=10 ; i++){
    let button = document.createElement("button")
    button.setAttribute("id","plus"+i)
    button.setAttribute("value",i)
    button.addEventListener("click",() => changeNumber("+",getDom(`plus${i}`).value))
    button.textContent = i
    document.body.appendChild(button)
}

