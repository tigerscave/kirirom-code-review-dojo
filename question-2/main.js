const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")
let number = 0
for(let i=2; i<=10; i++){
    let  button = document.createElement("BUTTON")
    button.innerHTML = i
    button.setAttribute("onclick",`plus${i}()`)
    document.body.appendChild(button)
}
function plus2(){
    number += 2
    numberElement.textContent = number
}
function plus3(){
    number += 3
    numberElement.textContent = number
}
function plus4(){
    number += 4
    numberElement.textContent = number
}
function plus5(){
    number += 5
    numberElement.textContent = number
}
function plus6(){
    number += 6
    numberElement.textContent = number
}
function plus7(){
    number += 7
    numberElement.textContent = number
}
function plus8(){
    number += 8
    numberElement.textContent = number
}
function plus9(){
    number += 9
    numberElement.textContent = number
}
function plus10(){
    number += 10
    numberElement.textContent = number
}

plusButton.addEventListener("click",() => { numberElement.textContent = ++number})
minusButton.addEventListener("click",() => { numberElement.textContent = --number})
resetButton.addEventListener("click",() => { numberElement.textContent = 0})